import React from "react";
import Prod from "./prod.js";
import Products from "./contact";

function App() {
  const prodar = Products.map((item) => <Prod key={item.id} product={item} />);
  return <div>{prodar}</div>;
}
export default App;
