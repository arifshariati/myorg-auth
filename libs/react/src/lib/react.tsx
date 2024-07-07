type MyComponentProps = {
  children: React.ReactNode;
};

export const MyComponent = ({ children }: MyComponentProps) => {
  console.log('MyComponent is called and 🔴');
  return <div>{children}</div>;
};
