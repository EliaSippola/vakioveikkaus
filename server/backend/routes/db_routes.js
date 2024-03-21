const exp = require('express');
const router = exp.Router();
const dbController = require('../controllers/db_controller');

router.get('/', dbController.getAllSaves);

router.post('/', dbController.createSave);

router.delete('/', dbController.deleteOne);

module.exports = router;