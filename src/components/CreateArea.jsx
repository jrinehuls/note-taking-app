import React, {useState} from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        // Need name in [] to get value stored in name, otherwise, would be accessing a kew called name.
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote() {
        props.onAdd(note);
    }

    // Since button is in form, it needs to be type=button to prevent page refresh.
    // If it wasn't in form, that would not be necessary.

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
                <textarea name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3" />
                <button type='button' onClick={submitNote /* Only needs arrow if function takes args, I think */ }>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
