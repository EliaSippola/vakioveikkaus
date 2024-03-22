import { deleteOne } from "./api/saves";

function SelectSave({ selectionList, forceUpdate, listId, setListId }) {

    const handleDelete = async () => {
        await deleteOne(listId);
        forceUpdate(4);
    }

    function handleChange(e) {
        setListId(e.target.value);
    }

    function handleSelect(e) {
        forceUpdate(5);
    }

    return (
        <div className="selectSave">
            <select className="selection" value={listId} onChange={handleChange}>
                {selectionList.map((val, i) => (
                    <option key={i} value={val._id}>{val.title}</option>
                ))}
            </select>
            <div className="deleteSel" onClick={handleDelete}>Delete</div>
            <div className="selectSel" onClick={handleSelect}>Select</div>
        </div>
    )
}

export default SelectSave;