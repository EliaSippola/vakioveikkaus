const baseUrl = 'http://localhost:3030/api/db';

// create save
export const createOne = async (save) => {
    await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': "application/json"},
        body: JSON.stringify(save)
    });
}

// get list of all titles
export const getAllSaves = async () => {
    const res = await fetch(baseUrl);
    return res.json();
}

// delete save
export const deleteOne = async (id) => {
    await fetch(baseUrl, {
        method: 'DELETE',
        headers: { 'Content-type': "application/json"},
        body: JSON.stringify({id: id})
    });
}