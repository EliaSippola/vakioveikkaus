import { getAllSaves } from "../api/saves";

// get selection from database
async function updateSelectionList(setSelectionList) {
    const list = await getAllSaves();
    setSelectionList(list);
}

export default updateSelectionList;