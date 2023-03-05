export function generateMorseCodeTable() {
    const morseCodeTableData = [
      ["a", ".-"],
      ["b", "-..."],
      ["c", "-.-."],
      ["d", "-.."],
      ["e", "."],
      ["f", "..-."],
      ["g", "--."],
      ["h", "...."],
      ["i", ".."],
      ["j", ".---"],
      ["k", "-.-"],
      ["l", ".-.."],
      ["m", "--"],
      ["n", "-."],
      ["o", "---"],
      ["p", ".--."],
      ["q", "--.-"],
      ["r", ".-."],
      ["s", "..."],
      ["t", "-"],
      ["u", "..-"],
      ["v", "...-"],
      ["w", ".--"],
      ["x", "-..-"],
      ["y", "-.--"],
      ["z", "--.."],
      ["0", "-----"],
      ["1", ".----"],
      ["2", "..---"],
      ["3", "...--"],
      ["4", "....-"],
      ["5", "....."],
      ["6", "-...."],
      ["7", "--..."],
      ["8", "---.."],
      ["9", "----."],
    ];
  
    return (
      <table className="morse-code-table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Morse Code</th>
          </tr>
        </thead>
        <tbody>
          {morseCodeTableData.map(([character, morseCode]) => (
            <tr key={character}>
              <td>{character}</td>
              <td>{morseCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  