const exp = require('express');
const router = exp.Router();
//const dbController = require('controllers/db_controller.js');

router.get('/', (req, res) => {
    res.send("Hello world!");
});

module.exports = router;