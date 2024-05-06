import React, { useState } from "react";

export default function CreateArea({ onAdd }){
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(e) {
        const {name, value} = e.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e){
        onAdd(note);
        e.preventDefault();
    }

    return (
      <div>
        <form>
            <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
            <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={handleChange} />
            <button onClick={submitNote}>Add</button>
        </form>
      </div>  
    );
}