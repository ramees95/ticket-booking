/**
 * User Route
 */

var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller')

/**
 * API to register a user
 */
router.post('/register', userController.register);

/**
 * API to get profile of a user
 */
router.get('/profile/:id', userController.profile);


module.exports = router;
