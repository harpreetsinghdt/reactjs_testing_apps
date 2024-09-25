import React from "react";

const Output = (props) => {
  return (
    <>
      <h3>Child component</h3>
      <p>{props.children}</p>;
    </>
  );
};

export default Output;
