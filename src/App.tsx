import { useState } from "react";

function App() {
  const [firstname, setFirstName] = useState("Kim");
  return (
    <>
      <h1 className="text-5xl text-red-500">Hello World</h1>

      <div className="bg-slate-300 p-4 flex gap-2">
        <button onClick={() => setFirstName("Robert")}>Change</button>
        <p className="text-2xl">First name: {firstname}</p>
      </div>
    </>
  );
}

export default App;
