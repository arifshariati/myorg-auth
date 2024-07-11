type MyComponentProps = {
  children: React.ReactNode;
};

export const MyComponent = ({ children }: MyComponentProps) => {
  console.log('MyComponent is called and 🔥🚀🚀');
  return (
    <div>
      <h1>This is h1</h1>
      <p>This is paragraph</p>
      <p>Another P Tag</p>
      {children}
    </div>
  );
};
