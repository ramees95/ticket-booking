/**
 * Bookings Model
 */

const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    theater_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theater',
        required: true
    },
    movie_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    show_time: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    is_cancelled: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Bookings', BookingSchema);