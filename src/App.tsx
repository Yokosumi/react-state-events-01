import { useState } from "react";
import { VariableWrapper } from "./components/VariableWrapper";

// const cssColors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "orange",
//   "purple",
//   "pink"
// ];

function App() {
  const [firstname, setFirstName] = useState("Kim");
  const [randomNumber, setRandomNumber] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [cssColors, setCssColors] = useState(["hotpink", "darkred"]);

  const handleColorAdd = () => {
    const newColor = "purple";
    const _cssColors = structuredClone(cssColors);
    _cssColors.push(newColor);
    setCssColors(_cssColors);
  };
  return (
    <>
      <h1 className="text-5xl text-red-500">Hello World</h1>

      <VariableWrapper>
        <button onClick={() => setFirstName("Robert")}>Change</button>
        <p>First name: {firstname}</p>
      </VariableWrapper>

      <VariableWrapper>
        <button onClick={() => setRandomNumber(Math.random())}>Change</button>
        <p>Random Number: {randomNumber.toFixed(2)}</p>
      </VariableWrapper>
      <VariableWrapper>
        <button onClick={() => setIsOnline(!isOnline)}>Toggle</button>
        <p> {isOnline ? "User is online" : "User is offline"}</p>
      </VariableWrapper>
      <VariableWrapper>
        <button onClick={() => handleColorAdd()}>Add Color</button>
        {cssColors.map((cssColor) => (
          <div>{cssColor}</div>
        ))}
      </VariableWrapper>
    </>
  );
}

export default App;
