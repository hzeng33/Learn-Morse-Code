import React, { useState } from "react";

const MorseCodeTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const morseCodeMap = {
    "a": ".-", 
    "b": "-...", 
    "c": "-.-.", 
    "d": "-..", 
    "e": ".", 
    "f": "..-.", 
    "g": "--.", 
    "h": "....", 
    "i": "..", 
    "j": ".---", 
    "k": "-.-", 
    "l": ".-..", 
    "m": "--", 
    "n": "-.", 
    "o": "---", 
    "p": ".--.", 
    "q": "--.-", 
    "r": ".-.", 
    "s": "...", 
    "t": "-", 
    "u": "..-", 
    "v": "...-", 
    "w": ".--", 
    "x": "-..-", 
    "y": "-.--", 
    "z": "--..", 
    "0": "-----", 
    "1": ".----", 
    "2": "..---", 
    "3": "...--", 
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----.", 
    ",": "--..--",
    ".": ".-.-.-", 
    "?": "..--..",  
    ":": "---...", 
    "/": "-..-.",
    "@": ".--.-.", 
    "+": ".-.-.", 
    "'": ".----.", 
    "-": "-....-", 
    "!": "-.-.--",
    "(": "-.--.",
    ")": "-.--.-"
  };

  const textToMorseCode = (text) => {
    let morseCode = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase();
      if (morseCodeMap[char]) {
        morseCode += morseCodeMap[char] + ' ';
      }
    }
    return morseCode;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setOutputText(textToMorseCode(event.target.value));
  };

  return (
    <div className="form-box">
         <label >Input text:</label>
         <textarea type="text" value={inputText} onChange={handleInputChange} />
         <br />
         <label>Output Morse Code:</label>
         <textarea type="text" value={outputText} readOnly />
    </div>
  );
};

export default MorseCodeTranslator;
