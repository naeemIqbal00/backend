const mongoose = require('mongoose');
// const option = require('./optionSchema');


const bubbleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    hasOptions: {
        type: Boolean,
        required: true,
    },
    descripton: {
        type: String,
        required: true,
        trim: true,
    },
    options: [

    ]

});
const bubble = mongoose.model('Bubble', bubbleSchema);

module.exports = bubble;


