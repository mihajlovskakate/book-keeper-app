import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


function CreateArea(props){

     const [note, setNote] = useState ({title:"", author:"", notation:""})
     const [clicked, setClick] = useState(false);

     function handleChange(event){
          const{name, value} = event.target
          setNote((prevNote)=>{
               return{
                    ...prevNote,
                    [name]: value
               }
          })
     }

     function submitNote(event){
          props.onAdd(note);
          setNote({
               title: "",
               author:"",
               notation: ""
             });
             event.preventDefault();

     }

     function handleClick() {
          setClick(true);
        }

    
    return (
    <div className="create-area">
     <form className="create-note">
        <input type="text" name="title" placeholder="Add a title" value = {note.title} onChange={handleChange} onClick={handleClick}></input>
        {clicked && (
        <input type="text" name="author" placeholder="Add an author" value={note.author} onChange={handleChange}/>)}
        {clicked && (
        <textarea name="notation" placeholder="Take a note..." value={note.notation} onChange={handleChange} rows={clicked ? "3" : "1"}/>)}        
          <Zoom in={clicked ? true : false}>
               <Fab onClick={submitNote}>
                    <AddIcon />
               </Fab>
          </Zoom>
     </form>
   </div>
   )
}

export default CreateArea