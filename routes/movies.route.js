/**
 * Movies Route
 */

var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/movies.controller')

/**
 * API to add new movie to the list
 */
router.post('/addNew', moviesController.addNew);

/**
 * API to list available movies
 */
router.get('/list', moviesController.listing);


module.exports = router;