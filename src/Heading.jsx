import React from "react";
const stylejx = {
  border: "2px solid white"
};

function Heading() {
  return (
    <h1
      className="class1"
      style={stylejx}
      spellCheck="false"
      contentEditable="true"
    >
      {" "}
      My favourite book
    </h1>
  );
}
export default Heading;
