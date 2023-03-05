import React, { useState } from "react";

const MorseCodeGame = () => {
  const [letter, setLetter] = useState("");
  const [morseCode, setMorseCode] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const letters = [
    { letter: "a", code: ". _" },
    { letter: "b", code: "_ . . ."},
    { letter: "c", code: "_ . _ ." },
    { letter: "d", code: "_ . ." },
    { letter: "e", code: "."},
    { letter: "f", code: ". . _ ." },
    { letter: "g", code: "_ _ ."},
    { letter: "h", code: ". . . ." },
    { letter: "i", code: ". ."},
    { letter: "j", code: ". _ _ _" },
    { letter: "k", code: "_ . _" },
    { letter: "l", code: ". _ . ."},
    { letter: "m", code: "_ _"},
    { letter: "n", code: "_ ." },
    { letter: "o", code: "_ _ _"},
    { letter: "p", code: ". _ _ ." },
    { letter: "q", code: "_ _ . _" },
    { letter: "r", code: ". _ ." },
    { letter: "s", code: ". . ."},
    { letter: "t", code: "_" },
    { letter: "u", code: ". . _" },
    { letter: "v", code:  ". . . _" },
    { letter: "w", code: ". _ _"},
    { letter: "x", code: "_ . . _" },
    { letter: "y", code: "_ . _ _" },
    { letter: "z", code: "_ _ . ." },
    { letter: "0", code: "_ _ _ _ _" },
    { letter: "1", code: ". _ _ _ _" },
    { letter: "2", code: ". . _ _ _" },
    { letter: "3", code: ". . . _ _" },
    { letter: "4", code: ". . . . _" },
    { letter: "5", code: ". . . . ." },
    { letter: "6", code: "_ . . . ." },
    { letter: "7", code: "_ _ . . ." },
    { letter: "8", code: "_ _ _ . ." },
    { letter: "9", code: "_ _ _ _ ." }
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
