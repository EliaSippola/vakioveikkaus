import React, { useState } from "react";
import { createOne } from "./api/saves";

function CreateSave({ selection, weighs, forceUpdate }) {

    const [title, setValue] = useState('');

    const handleClick = async () => {
        if (title === '') {
            return;
        }
        await createOne({ title, selection, weighs });

        setValue('');

        forceUpdate(4);
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className="save">
            <input className="saveInput" type="text" placeholder="title" onChange={handleChange} value={title} name="title"></input>
            <div className="createSave" onClick={handleClick}>Save current selection and weighs</div>
        </div>
    )
}

export default CreateSave;