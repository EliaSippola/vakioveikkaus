const exp = require('express');
const router = exp.Router();
const dbController = require('../controllers/db_controller');

router.get('/', (req, res) => {
    res.send("GET is provided by POST request").end();
});

router.post('/', dbController.getOrPost);

router.delete('/', dbController.deleteOne);

module.exports = router;