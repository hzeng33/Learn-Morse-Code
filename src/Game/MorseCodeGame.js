import React, { useState } from "react";

const MorseCodeGame = () => {
  const [letter, setLetter] = useState("");
  const [morseCode, setMorseCode] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const letters = [
    { letter: "A", code: ".-" },
    { letter: "B", code: "-..."},
    { letter: "C", code: "-.-." },
    { letter: "D", code: "-.." },
    { letter: "E", code: "."},
    { letter: "F", code: "..-." },
    { letter: "G", code: "--."},
    { letter: "H", code: "...." },
    { letter: "I", code: ".."},
    { letter: "J", code: ".---" },
    { letter: "K", code: "-.-" },
    { letter: "L", code: ".-.."},
    { letter: "M", code: "--"},
    { letter: "N", code: "-." },
    { letter: "O", code: "---"},
    { letter: "P", code: ".--." },
    { letter: "Q", code: "--.-" },
    { letter: "R", code: ".-." },
    { letter: "S", code: "..."},
    { letter: "T", code: "-" },
    { letter: "U", code: "..-" },
    { letter: "V", code:  "...-" },
    { letter: "W", code: ".--"},
    { letter: "X", code: "-..-" },
    { letter: "Y", code: "-.--" },
    { letter: "Z", code: "--.." },
    { letter: "0", code: "-----" },
    { letter: "1", code: ".----" },
    { letter: "2", code: "..---" },
    { letter: "3", code: "...--" },
    { letter: "4", code: "....-" },
    { letter: "5", code: "....." },
    { letter: "6", code: "-...." },
    { letter: "7", code: "--..." },
    { letter: "8", code: "---.." },
    { letter: "9", code: "----." }
  ];

  const randomLetter = () => {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters[randomIndex];
    setLetter(randomLetter.letter);
    setMorseCode(randomLetter.code);
    setIsCorrect(false);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === morseCode) {
      setScore(score + 1);
      setIsCorrect(true);
      setTimeout(() => {
        randomLetter();
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    randomLetter();
  };

  const handleStopClick = () => {
    setIsPlaying(false);
    setLetter("");
    setMorseCode("");
    setInput("");
    setIsCorrect(false);
    setScore(0);
  };

  return (
    <div className="game-section">
      <h2>Morse Code Game</h2>
      {isPlaying ? (
        <div className="play-section">
          <p>Score: {score}</p>
          <p>Enter the Morse code for the letter:</p>
          <h3>{letter}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="morse-code-input">Morse Code would be </label>
            <input type="text" id="morse-code-input" onChange={handleInputChange} value={input} />
            <br />
            {isCorrect ? <p>Correct!</p> : <p>Sorry, it's incorrect. Try again.</p>}
            <button type="submit">Submit</button>
            <button onClick={handleStopClick}>Stop</button>
          </form>
        </div>
      ) : (
        <div className="sectionbutton">
          <button className="play-button" onClick={handlePlayClick}>Play</button>
        </div>
      )}
    </div>
  );
};

export default MorseCodeGame;
