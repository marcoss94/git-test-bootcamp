import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>Navbar</nav>

      <p className="read-the-docs">Click on the</p>

      <span>Certificado GPTW</span>

      <footer>Footer</footer>
    </>
  );
}

export default App;
