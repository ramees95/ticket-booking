/**
 * Movies Model
 */

const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cast_creaw: {
        type: String,
        required: false
    },
    duration: {
        type: String,
        required: false
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Movies', MovieSchema);