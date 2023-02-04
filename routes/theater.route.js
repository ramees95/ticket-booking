/**
 * Theater Route
 */

var express = require('express');
var router = express.Router();

const theaterController = require('../controllers/theaters.controller')

/**
 * API to add new theater to the list
 */
router.post('/addNew', theaterController.addNew);

/**
 * API to list available theaters
 */
router.get('/list', theaterController.listing);


module.exports = router;