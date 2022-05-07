import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [show,setShow]=useState(false)

  function handleChange(event) {
    
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
function textareaClick() {
  setShow(true);
}
  return (
    <div>
      <form className="create-note">
        {show?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={textareaClick}
          value={note.content}
          placeholder="Take a note..."
          rows={show?"3":"1"}
        />
        {show?
        <Zoom in={true} >
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>:null}
      </form>
    </div>
  );
}

export default CreateArea;
