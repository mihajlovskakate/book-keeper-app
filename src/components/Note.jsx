import React from "react";
import DeleteIcon from "@mui/icons-material/Delete"
import Fab from "@mui/material/Fab"

function Note(props){

    function handleClick() {
          props.onDelete(props.id);
        }

    return (
    <div className="note">
        <h1 className="h1">"{props.title}"</h1>
        <h2 className="h2">by {props.author}</h2>
        <p className="p">{props.notation}</p>
        <Fab onClick={handleClick}>
            <DeleteIcon />
        </Fab>
    </div>
    )
}

export default Note