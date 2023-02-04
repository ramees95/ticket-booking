/**
 * Booking Route
 */

var express = require('express');
var router = express.Router();

const bookingController = require('../controllers/bookings.controller')

/**
 * API to book a ticket
 */
router.post('/bookTicket', bookingController.bookTicket);

/**
 * API to reschedule a booking
 */
router.put('/reschedule/:id', bookingController.rescheduleBooking);

/**
 * API to cancel a booking
 */
router.put('/cancel/:id', bookingController.cancelBooking)


module.exports = router;