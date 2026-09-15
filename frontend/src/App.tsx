import { useState } from "react";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <>
      <h1>AI Notes</h1>

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="メモを入力"
      />
      <button onClick={addNote}>追加</button>

      <p>{note}</p>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
