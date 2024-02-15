import React, { useMemo } from 'react';

function MyComponent({ a, b }) {
  const result = useMemo(() => {
    // Perform expensive calculations here
    return a + b;
  }, [a, b]);

  return <div>{result}</div>;
}

export default MyComponent;
