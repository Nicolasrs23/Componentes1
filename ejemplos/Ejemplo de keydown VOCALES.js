import React from "react";
import "./style.css";

export default function App() {
  const funcion = evt => {
    if (
      evt.code === "KeyA" ||
      evt.code === "KeyE" ||
      evt.code === "KeyI" ||
      evt.code === "KeyO"
    ) {
      evt.preventDefault();
    } else {
      console.log(evt.code);
    }
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input onKeyDown={funcion} />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
