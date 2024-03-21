const Data = require('../models/data');
const Save = require('../models/saves');

// create save
exports.createSave = async (req, res) => {
    try {

        if (req.body.title === null || req.body.selection === null || req.body.weighs === null) {
            res.status(400).end('Not all required fields set');
        }

        let save = new Save();

        save.title = req.body.title;

        await Save.insertMany(save);

        let data = new Data();

        data.saveId = save._id;
        data.selection = req.body.selection;
        data.weighs = req.body.weighs;

        await Data.insertMany(data);

        res.status(200).end();
    } catch (e) {
        res.status(500).send('Server error');
        console.log(e);
    }
}

// get all titles
exports.getAllSaves = async (req, res) => {
    try {
        const save = await Save.find();
        res.json(save);

        res.status(200).end();
    } catch (e) {
        res.status(500).send('Server error');
        console.log(e);
    }
}

// delete one
exports.deleteOne = async (req, res) => {
    if (req.body.id === null) {
        res.status(400).end();
        return;
    }
    try {
        const id = req.body.id;

        await Data.deleteOne({"saveId":id});
        await Save.deleteOne({"_id": id});
        res.status(200).end();
    } catch (e) {
        res.status(500).send("Server error");
        console.log(e);
    }
}