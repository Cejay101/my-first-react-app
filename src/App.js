// Imports from react
import { useState } from "react";

// Import CSS
import "./App.css";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [password, setPassword] = useState("Password");
  const [length, setLength] = useState("8");
  const [difficulty, setdifficulty] = useState("WEAK");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let characterSets = "";
    if (uppercase) {
      characterSets += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      characterSets += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      characterSets += "0123456789";
    }
    if (symbols) {
      characterSets += "!@#$%^&*()_+-=[]{}|;:,.<>/?";
    }

    if (characterSets.length === 0) {
      return "";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * characterSets.length);
      const character = characterSets.charAt(characterIndex);
      password += character;
    }
    return password;
  }

  const passwords = generatePassword(
    length,
    uppercase,
    lowercase,
    numbers,
    symbols
  );

  const handleGenerate = () => {
    if (!(uppercase || lowercase || symbols || numbers)){alert("Customize password")}
    else{

      setPassword(passwords);
      const difficulty =()=>{
        if (uppercase && lowercase && symbols && numbers && length >14)
        {return setdifficulty("LEGENDARY")}
        if (
          uppercase && symbols &&
          (lowercase  || numbers) &&
          length >= 12
        ) {
          return setdifficulty("VERY STRONG");
        }
        if (uppercase && (lowercase || symbols || numbers) && length >= 8)
        {return setdifficulty("STRONG")}
        
        else{ return setdifficulty('WEAK')}
      
      }
      difficulty()
    }
    }
    
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert(
      `${difficulty} Password Copied ${
        difficulty === "WEAK" ? "😢" : difficulty === "LEGENDARY" ? "😎" : "😊"
      }`
    );

  };
  return (
    <div className="password-generator">
      <h2 className="header">Password Generator</h2>
      <div className="copy-password">
        <h3>{password}</h3>
        <FontAwesomeIcon onClick={handleCopy} className="icon" icon={faCopy} />
      </div>
      <div className="generator">
        <div className="character-length">
          <p>Character Length</p>
          <p className="length">{length}</p>
        </div>
        <input
          type="range"
          min="6"
          max="15"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="slider"
        />
        <br />
        <label>
          <input
            className="check"
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <span>Include Uppercase Letter</span>
        </label>
        <br />
        <label>
          <input
            className="check"
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          <span>Include Lowercase Letter</span>
        </label>
        <br />
        <label>
          <input
            className="check"
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          <span>Include Numbers</span>
        </label>
        <br />
        <label>
          <input
            className="check"
            type="checkbox"
            checked={symbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
          <span>Include symbols</span>
        </label>
        <br />
        <div className="strength">
          <p>STRENGTH</p>
          <p className="level">{difficulty}</p>
          <div className="bars">
            <div
              className="bar bar1"
              style={{
                background:
                  difficulty === "WEAK"
                    ? "red"
                    : difficulty === "STRONG"
                    ? "orange"
                    : difficulty === "VERY STRONG"
                    ? "yellow"
                    : "green",
              }}
            ></div>
            <div
              className="bar bar2"
              style={{
                background:
                  difficulty === "STRONG"
                    ? "orange"
                    : difficulty === "VERY STRONG"
                    ? "yellow"
                    : difficulty === "LEGENDARY"
                    ? "green"
                    : "#fbfbfe00",
              }}
            ></div>
            <div
              className="bar bar3"
              style={{
                background:
                  difficulty === "VERY STRONG"
                    ? "yellow"
                    : difficulty === "LEGENDARY"
                    ? "green"
                    : "#fbfbfe00",
              }}
            ></div>
            <div
              className="bar bar4"
              style={{
                background: difficulty === "LEGENDARY" ? "green" : "#fbfbfe00",
              }}
            ></div>
          </div>
        </div>
        <button onClick={handleGenerate}>
          <p>GENERATE </p>{" "}
          <FontAwesomeIcon
            className="icon"
            icon={faArrowRight}
            style={{ color: "black" }}
          />
        </button>
      </div>
      <p className="footer-text">
        Created by Clinton Joy - Frontend Mentor challenge{" "}
      </p>
      <div className="socials">
        <a
          href="https://github.com/Cejay101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a
          href="https://www.twitter.com/clintonjoy10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/in/clinton-joy-538804244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}
export default App;
