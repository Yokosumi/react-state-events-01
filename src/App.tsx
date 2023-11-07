import { useState } from "react";
import { VariableWrapper } from "./components/VariableWrapper";

function App() {
  const [firstname, setFirstName] = useState("Kim");
  const [randomNumber, setRandomNumber] = useState(0);
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
    </>
  );
}

export default App;
