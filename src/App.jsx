import "./App.css";
import Body from "./Body";
import Navbar from "./Navbar";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);

  const handleChange = () => {
    setTheme((prev) => !prev);
  };
  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <Navbar theme={theme} handleChange={handleChange} />
      <Body />
    </div>
  );
}

export default App;
