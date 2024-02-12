import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // This code will run after the component has rendered

    // Add your side effects here, such as fetching data or subscribing to events

    return () => {
      // This code will run before the component is unmounted

      // Clean up any resources or subscriptions here
    };
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    // 
    <p> Hola</p>
  );
}

export default MyComponent;
