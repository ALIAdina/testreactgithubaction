import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload Bonjour.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React linda
        </a>

        {/* Bouton pour afficher l'input */}
        <button onClick={() => setShowInput(true)}>
          Afficher input test test
        </button>

        {/* L'input apparaît seulement si showInput est true */}
        {showInput && (
          <input type="text" placeholder="Tapez ici lll   linn sa march..." />
        )}
      </header>
    </div>
  );
}

export default App;
