import React, { useState } from "react";
import { deleteOne } from "./api/saves";

function SelectSave({ selectionList, forceUpdate }) {

    const [id, setId] = useState(null);

    const handleDelete = async () => {
        await deleteOne(id);
        forceUpdate(4);
    }

    function handleChange(e) {
        setId(e.target.value);
    }

    return (
        <div className="selectSave">
            <select className="selection" defaultValue={id} onChange={handleChange}>
                {selectionList.map((val, i) => (
                    <option key={i} value={val._id}>{val.title}</option>
                ))}
            </select>
            <div className="deleteSel" onClick={handleDelete}>Delete</div>
            <div className="selectSel">Select</div>
        </div>
    )
}

export default SelectSave;