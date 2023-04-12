import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note"
import CreateArea from "./components/CreateArea";

function App() {

const [notes, setNotes] = useState([]);

function addNote(newNote){
    setNotes(prevNotes  =>{
      return [...prevNotes, newNote]
    })
}

function deleteNote(id) {
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id;
    });
  });
}

    return (
    <div className="container">
    <Header />
    <div className="note-container">
    <CreateArea onAdd={addNote} />
    <div className="notes-row">
    {notes.map((noteItem, index) => {
        return ( 
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              author={noteItem.author}
              notation={noteItem.notation}
              onDelete={deleteNote}
            />
        );
      })}
    </div>
    </div>
    <Footer />
    </div>
    );
    
  }
  
  export default App;
  