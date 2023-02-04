/**
 * Booking Controller
 */

const Booking = require('../models/bookings.model')
const User = require('../models/users.model');
const Movie = require('../models/movies.model');
const Theater = require('../models/theters.model');

/**
 * Controller to book a ticket for a movie
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.bookTicket = (req, res) => {
    /**
     * Validate request
     */
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    const movie = Movie.findById(req.body.movie_id);
    const user = User.findById(req.body.user_id)
    const theater = Theater.findById(req.body.theater_id)

    if (movie && user && theater) {

        const exist = Booking.find({
            theater_id: req.body.theater_id,
            movie_id: req.body.movie_id,
            show_time: req.body.show_time,
            user_id: req.body.user_id,
        })

        if (!exist) {

            /**
             * Create a new booking
             */
            const booking = new Booking({
                theater_id: req.body.theater_id,
                movie_id: req.body.movie_id,
                show_time: req.body.show_time,
                user_id: req.body.user_id,
                count: req.body.count,
            });

            /**
             * Save booking in the database
             */
            booking.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something went wrong while booking movie."
                    });
                });
        } else {
            return res.status(400).send({
                message: "Booking Already Exist"
            });
        }
    } else {
        return res.status(400).send({
            message: "Please fill correct details"
        });
    }
}

/**
 * Controller to cancel a booking
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.cancelBooking = (req, res) => {
    /**
     * Validate Request
     */
    if (!req.params.id) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    Booking.findByIdAndUpdate(req.params.id, { is_cancelled: true }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating Booking with id " + req.params.id
            });
        });
}

/**
 * Controller to reschedule a booking
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.rescheduleBooking = (req, res) => {
    /**
     * Validate Request
     */
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Booking not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating Booking with id " + req.params.id
            });
        });
}