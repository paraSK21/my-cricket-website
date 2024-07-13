
import React, { createContext, useState } from 'react';

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [desc, setDesc] = useState("");

  const addNote = () => {
    if (desc.trim() !== "") {
      setNotes([...notes, { id: notes.length + 1, text: desc }]);
      setDesc("");
    }
  }; 

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, desc, setDesc, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
