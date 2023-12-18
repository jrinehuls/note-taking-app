import React, {useState} from "react";

function CreateArea(props) {

    const defaultNote = {
        title: "",
        content: ""
    }

    const [note, setNote] = useState(defaultNote);

    // Sets values for the title and content of the note as it's being typed.
    function handleChange(event) {
        const {name, value} = event.target;
        // Need name in [] to get value stored in name, otherwise, would be accessing a key called name.
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    /* Since button is in form, it needs to be type=button to prevent page refresh.
    If it wasn't in form, that would not be necessary. In onClick, Only needs arrow
    if function takes args, I think */
    function submitNote() {
        props.onAdd(note);
        setNote(defaultNote);
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3" />
                <button type='button' onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
