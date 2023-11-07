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

const initialPerson = {
  firstName: "FIRST",
  lastName: "LAST",
  age: "0",
};

function App() {
  const [firstname, setFirstName] = useState("Kim");
  const [randomNumber, setRandomNumber] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [cssColors, setCssColors] = useState(["hotpink", "darkred"]);
  const [person, setPerson] = useState(initialPerson);

  const handleColorAdd = () => {
    const newColor = "purple";
    const _cssColors = [...structuredClone(cssColors), newColor];
    setCssColors(_cssColors);
  };
  const handleColorRemove = () => {
    const _cssColors = structuredClone(cssColors);
    _cssColors.pop();
    setCssColors(_cssColors);
  };

  const handleChangeFirstName = (value: string) => {
    const _person = structuredClone(person);
    _person.firstName = value;
    setPerson(_person);
  };
  const handleChangeLastName = (value: string) => {
    const _person = structuredClone(person);
    _person.lastName = value;
    setPerson(_person);
  };
  const handleChangeAge = (value: string) => {
    const _person = structuredClone(person);
    _person.age = value;
    setPerson(_person);
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
        <button onClick={() => handleColorRemove()}>Remove Color</button>
        {cssColors.map((cssColor) => (
          <div
            className="rounded p-4 font-bold"
            style={{ backgroundColor: cssColor }}
          >
            {cssColor}
          </div>
        ))}
      </VariableWrapper>

      <VariableWrapper>
        <form className="w-full">
          <fieldset className="border border-gray-500 w-full">
            <legend>Person Info:</legend>
            <div>
              <label htmlFor="firstName">First name:</label>
              <input
                onChange={(event) => handleChangeFirstName(event.target.value)}
                type="text"
                id="firstName"
                value={person.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">last name:</label>
              <input
                onChange={(event) => handleChangeLastName(event.target.value)}
                type="text"
                id="lastName"
                value={person.lastName}
              />
            </div>
            <div>
              <label htmlFor="age">age:</label>
              <input
                onChange={(event) => handleChangeAge(event.target.value)}
                type="text"
                id="age"
                value={person.age}
              />
            </div>
          </fieldset>
        </form>
        <pre className="mt-2">{JSON.stringify(person, null, 2)}</pre>
      </VariableWrapper>
    </>
  );
}

export default App;
