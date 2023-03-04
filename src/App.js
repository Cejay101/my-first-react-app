import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faCopy } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div className="password-generator">
      <h2 className="header">Password Generator</h2>
      <div className="copy-password">
        <h3>password</h3>
        <FontAwesomeIcon className="icon" icon={faCopy} />
      </div>
      <div className="generator">
        <div className="character-length">
          <p>Character Length</p>
          <p className="length">10</p>
        </div>
        <input type="range" className="slider" />
        <br />
        <label>
          <input className="check" type="checkbox" />
          <span>Include Uppercase Letter</span>
        </label>
        <br />
        <label>
          <input className="check" type="checkbox" />
          <span>Include Lowercase Letter</span>
        </label>
        <br />
        <label>
          <input className="check" type="checkbox" />
          <span>Include Numbers</span>
        </label>
        <br />
        <label>
          <input className="check" type="checkbox" />
          <span>Include symbols</span>
        </label>
        <br />
        <div className="strength">
          <p>STRENGTH</p>
          <p className="level">Medium</p>
          <div className="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <button>
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
