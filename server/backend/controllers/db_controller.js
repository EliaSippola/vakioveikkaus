const Data = require('../models/data');
const Save = require('../models/saves');
const dotenv = require('dotenv');

dotenv.config();

// create save, and get all titles, and one save
exports.getOrPost = async (req, res) => {

    // check for api key in body
    if (req.body.api_key !== process.env.API_KEY) {
        res.status(401).end();
        return;
    }
    
    // post request
    if (req.body.type === 0) {
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

    // get request (needs body)
    } else if (req.body.type === 1) {
        try {
            const save = await Save.find();
            res.json(save);
    
            res.status(200).end();
        } catch (e) {
            res.status(500).send('Server error');
            console.log(e);
        }

    // get save details
    } else if (req.body.type === 2) {

        if (req.body.id === null || req.body.id === 0) {
            res.send(400).end();
            return;
        }

        try {

            const data = await Data.findOne({ saveId: req.body.id });
            res.json(data);

            res.status(200).end();
        } catch (e) {
            res.status(500).send('Server error').end();
            console.log(e);
        }
    } else {
        res.status(404).end();
    }

}

// delete one
exports.deleteOne = async (req, res) => {

    if (req.body.api_key !== process.env.API_KEY) {
        res.status(401).end();
        return;
    }

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