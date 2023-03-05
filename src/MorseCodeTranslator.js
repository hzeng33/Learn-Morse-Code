import React, { useState } from "react";

const MorseCodeTranslator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const morseCodeMap = {
    "a": ". _", "b": "_ . . .", "c": "_ . _ .", "d": "_ . .", "e": ".", "f": ". . _ .", "g": "_ _ .", 
    "h": ". . . .", "i": ". .", "j": ". _ _ _", "k": "_ . _", "l": ". _ . .", "m": "_ _", "n": "_ .", 
    "o": "_ _ _", "p": ". _ _ .", "q": "_ _ . _", "r": ". _ .", "s": ". . .", "t": "_", "u": ". . _", 
    "v": ". . . _", "w": ". _ _", "x": "_ . . _", "y": "_ . _ _", "z": "_ _ . .", "0": "_ _ _ _ _", 
    "1": ". _ _ _ _", "2": ". . _ _ _", "3": ". . . _ _", "4": ". . . . _", "5": ". . . . .", 
    "6": "_ . . . .", "7": "_ _ . . .", "8": "_ _ _ . .", "9": "_ _ _ _ .", ",": "_ _ . . _ _",
    ".": ". _ . _ . _", "?": ". . _ _ . .", ";": "_ . _ . _ .", ":": "_ _ _ . . .", "/":"_ . . _ .",
    "@":". _ _ . _ .", "*":"_ . . _", "'":". _ _ _ _ .", "-":"_ . . . . _"
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
         <label>Output Morse code:</label>
         <textarea type="text" value={outputText} readOnly />
    </div>
  );
};

export default MorseCodeTranslator;
