const mongoose = require('mongoose');


const optionSchmea = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    descripton: {
        type: String,
        required: true,
        trim: true,
    },

});
const option = mongoose.model('Options', optionSchmea);

module.exports = option;


