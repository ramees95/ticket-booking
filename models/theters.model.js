/**
 * Theaters Model
 */

const mongoose = require('mongoose');

const TheaterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    shows: {
        type: String,
        required: true
    },
    owner_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contact: {
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

module.exports = mongoose.model('Theaters', TheaterSchema);