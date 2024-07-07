type MyComponentProps = {
  children: React.ReactNode;
};

export const MyComponent = ({ children }: MyComponentProps) => {
  console.log('MyComponent is callred');
  return <div>{children}</div>;
};
