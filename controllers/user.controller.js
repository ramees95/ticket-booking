/**
 * User Controller
 */

const User = require('../models/users.model');

/**
 * Controller to register a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.register = (req, res) => {

    /**
     * Validate request
     */
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    /**
     * Create a new User
     */
    const user = new User({
        full_name: req.body.full_name,
        gender: req.body.gender,
        email: req.body.email,
        mobile: req.body.mobile,
    });

    /**
     * Save user in the database
     */
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new user."
            });
        });
};

/**
 * Controller to get profile
 * @param {*} req 
 * @param {*} res 
 */
exports.profile = (req, res) => {
    console.log("gvhgvjbkb", req.params.id);

    /**
     * Validate request
     */
    if (!req.params.id) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error getting user with id " + req.params.id
            });
        });
};