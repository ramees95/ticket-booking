/**
 * Movies controller
 */

const Movie = require('../models/movies.model');

/**
 * Controller to add new movies to list
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
     * Create a new movies
     */
    const movie = new Movie({
        name: req.body.name,
        cast_creaw: req.body.cast_creaw,
        duration: req.body.duration,
    });

    /**
     * Save movie in the database
     */
    movie.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while adding new movie."
            });
        });
};

/**
 * Controller to list available movies
 * @param {*} req 
 * @param {*} res 
 */
exports.listing = (req, res) => {

    /**
     * setting query based on request
     */
    let query = null;

    if (req.query.name) {
        query = {
            name: { $regex: req.query.name, $options: 'i' }
        }
    }

    
    Movie.find(query)
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while getting list of movies."
            });
        });
}