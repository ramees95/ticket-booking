/**
 * User Model
 */

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);