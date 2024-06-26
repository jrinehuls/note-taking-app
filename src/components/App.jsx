import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {

  const [notes, setNotes] = useState([{
    title: "Note title",
    content: "Note content"
  }])

  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note]
    });
  }

  function deleteNote(id) {
    // console.log(id);
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index != id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => 
        <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
