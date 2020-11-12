import React from "react";
import useLocalStorage from "./useLocalStorage";
const App = () => {
  const [name, setName] = useLocalStorage("name", "");
  console.log("inside APPP");
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default App;
