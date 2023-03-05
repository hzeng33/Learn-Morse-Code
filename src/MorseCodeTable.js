import React from "react";
import { generateMorseCodeTable } from "./table";

function MorseCodeTable() {
  const morseCodeTable = generateMorseCodeTable();

  return (
    <div className="morse-code-table-container">
      <h2>Morse Code Table</h2>
      <table className="morse-code-table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          {morseCodeTable.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MorseCodeTable;
