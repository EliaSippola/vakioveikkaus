const mong = require('mongoose');

const dataSchema = new mong.Schema({
    saveId: {
        type: mong.Types.ObjectId,
        required: true
    },
    selection: {
        type: [],
        required: true
    },
    weighs: {
        type: [],
        required: true
    }
})

module.exports = mong.model('Data', dataSchema);