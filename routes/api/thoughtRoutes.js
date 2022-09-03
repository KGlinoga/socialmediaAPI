const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require ('../../controllers/thoughtController');

// get all thoughts
// URL: port/api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// get single thought by _id - wait, should there be an id field in the thoughts schema tho?? 
// url: port/api/users/:userID/thoughts/:_id
router.route('/:thoughtId').get(getSingleThought);


// update/delete a thought by its _id
// url: port/api/thoughts/:_id
router.route('/:thoughtId').put(updateThought).delete(deleteThought);

// add a reaction to a thought
// url: port/api/thoughts/:thoughtID/reactions
// router.route('/:thoughtId/reactions').post(addReaction)

// delete a reaction from a thought
// url: port/api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;
