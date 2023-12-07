
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../collections/notes"

function App() {
  return(
    <>
      <Header />
      {notes.map(note => 
        <Note 
          key={note.id}
          title={note.title}
          content={note.content}
        />
      )}
      <Footer />
    </>
  );
}

export default App
