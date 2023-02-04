/**
 * Theater Controller
 */
const Theater = require('../models/theters.model')

/**
 * Controller to add new theater to list
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.addNew = (req, res) => {

    /**
     * Validate request
     */
    if (!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    /**
     * Create a new theater
     */
    const theater = new Theater({
        name: req.body.name,
        location: req.body.location,
        shows: req.body.shows,
        owner_name: req.body.owner_name,
        email: req.body.email,
        contact: req.body.contact,
    });

    /**
     * Save theater in the database
     */
    theater.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while adding new movie."
            });
        });
};

/**
 * Controller to list available theters
 * @param {*} req 
 * @param {*} res 
 */
exports.listing = (req, res) => {

    /**
     * setting query based on request
     */
    let query = null;

    if (req.query.location) {
        query = {
            location: { $regex: req.query.location, $options: 'i' }
        }
    }


    Theater.find(query)
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of theaters."
            });
        });
}