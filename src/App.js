import React from 'react';
import MorseCodeTranslator from "./MorseCodeTranslator";
import MorseCodeGame from './Game/MorseCodeGame';

function App() {
  return (
    <div className="App">
        <h1>Learn Morse Code</h1>
        <MorseCodeTranslator/>
        <MorseCodeGame />
    </div>
  );
}

export default App;
