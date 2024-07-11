// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCounter, INCREMENT, DECREMENT } from '@myorg-auth/react';

export function App() {
  const { count, dispatch } = useCounter();
  console.log({ count });
  return (
    <div>
      <div>
        <h1>Current Count: {count}</h1>
        <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
