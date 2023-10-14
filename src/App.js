import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const [component, setComponent] = useState([]);
  return (
    <>
      <div className="main">
        <Home />
      </div>
    </>
  );
}

export default App;
