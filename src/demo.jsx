import React from 'react';

function Demo() {
  // Define variables and conditional logic here
  const x = 15;
  let text = "Goodbye";
  if (x < 10) {
    text = "Hello";
  }
  const txt = second();

  // Include JSX markup with the result of the conditional logic
  return (
    <div className="App">
      <h1 className="h1">{text}</h1>
      <h2>{txt}</h2>
    </div>
  );
}

function second() {
    return(
        <h2>Mithushan</h2>
    );
}

export default Demo;
