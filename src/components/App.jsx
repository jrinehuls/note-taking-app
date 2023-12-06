
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../collections/notes"

function renderNote(note) {
    return (
      <Note 
        key={note.id}
        title={note.title}
        content={note.content}
      />
    );
}

function App() {
    return(
      <>
        <Header />
        {notes.map(renderNote)}
        <Footer />
      </>
    );
}

export default App
