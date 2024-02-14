import React, { useContext } from 'react';

// Create a context
const MyContext = React.createContext();

// Create a component that uses the context
const MyComponent = () => {
  // Access the context using useContext
  const value = useContext(MyContext);

  return (
    <div>
      <h1>Value from Context: {value}</h1>
    </div>
  );
};

// Create a parent component that provides the context value
const ParentComponent = () => {
  const value = 'Hello, World!';

  return (
    <MyContext.Provider value={value}>
      <MyComponent />
    </MyContext.Provider>
  );
};

export default ParentComponent;
