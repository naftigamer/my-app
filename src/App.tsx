import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [candidates, setCandidates] = useState([{ value: "name", id: 1 }]);

  return (
    <div className="App">
      <h1>welcome to the probetag</h1>
    </div>
  );
}

export default App;
