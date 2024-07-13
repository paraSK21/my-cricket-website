import React, { useContext } from 'react';
import { NotesContext } from './NotesContext';
import './index.css';
import './App.css';

function App() {
  const { notes, desc, setDesc, addNote, deleteNote } = useContext(NotesContext);

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4">
        Toggle Dark Mode
      </button>
      <h1 className="text-3xl font-bold underline mb-4 text-center">Hello, get your notes here!</h1>
      <div className="add-notes mb-4">
        <input
          type="text"
          placeholder="Add your Note here"
          value={desc}
          id="addnote"
          onChange={(e) => setDesc(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button
          id="add-button"
          onClick={addNote}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center mx-auto my-4"
        >
          Add Note
        </button>
      </div>

      <div className="display-notes">
        <h5 className="mb-2 text-center">Number of notes: {notes.length}</h5>
        <ul className="space-y-4">
          {notes.map((note, index) => (
            <li
              key={note.id}
              className={`bg-gray-100 p-4 rounded shadow-md flex justify-between items-center ${
                index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'
              }`}
            >
              <span className="text-lg">{note.text}</span>
              <button
                id="button"
                onClick={() => deleteNote(note.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
