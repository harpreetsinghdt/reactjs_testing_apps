import React, { useState } from "react";
import Output from "./Output";
const Greeting = () => {
  const [text, setText] = useState(false);
  const handleClick = () => {
    setText(true);
  };
  return (
    <div>
      <h2>Hello world, Greeting</h2>
      {!text && <Output>its good to see you</Output>}
      {text && <Output>Changed!</Output>}
      <button onClick={handleClick}>Change text</button>
    </div>
  );
};

export default Greeting;
