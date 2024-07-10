import { createContext, useContext, useReducer } from 'react';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const CounterContext = createContext<unknown>(null);

const counterReducer =
  (
    add: (num1: number, num2: number) => number,
    subtract: (num1: number, num2: number) => number
  ) =>
  (state: number, { type }: { type: string }) => {
    switch (type) {
      case INCREMENT:
        return add(state, 1);
      case DECREMENT:
        return subtract(state, 1);
      default:
        return state;
    }
  };

type CounterProviderType = {
  children: React.ReactNode;
  add: (num1: number, num2: number) => number;
  subtract: (num1: number, num2: number) => number;
};

const CounterProvider = ({ children, add, subtract }: CounterProviderType) => {
  // Optional runtime guard for additional safety
  if (typeof add !== 'function' || typeof subtract !== 'function') {
    throw new Error('CounterProvider requires add and subtract functions');
  }

  const [count, dispatch] = useReducer(counterReducer(add, subtract), 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterProvider, useCounter, INCREMENT, DECREMENT };
