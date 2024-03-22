const apikey = process.env.REACT_APP_DB_API_KEY;

const baseUrl = 'http://localhost:3030/api/db';

// create save
export const createOne = async (save) => {

    save.api_key = apikey;
    save.type = 0

    await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': "application/json"},
        body: JSON.stringify(save),
    });
}

// get list of all titles
export const getAllSaves = async () => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: { 'Content-type': "application/json" },
        body: JSON.stringify({
            api_key: apikey,
            type: 1
        })
    });
    return res.json();
}

// delete save
export const deleteOne = async (id) => {
    await fetch(baseUrl, {
        method: 'DELETE',
        headers: { 'Content-type': "application/json"},
        body: JSON.stringify({
            id: id,
            api_key: apikey
        })
    });
}

// get selection and weighs of one save
export const getOneSave = async (id) => {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-type': "application/json"},
        body: JSON.stringify({
            api_key: apikey,
            type: 2,
            id: id
        })
    });
    return res.json();
}