const mong = require('mongoose');

const saveSchema = new mong.Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mong.model('Save', saveSchema);