const mongoose = require('mongoose');

// Creation d'un Schema  avec mongoose

const prod = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Product", prod);