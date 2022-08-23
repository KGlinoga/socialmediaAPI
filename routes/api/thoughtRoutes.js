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
router.route('/').get(getAllThoughts);

// get single thought by _id - wait, should there be an id field in the thoughts schema tho?? 
// url: port/api/thoughts/:_id
router.route('/:thoughtId').get(getSingleThought);

// create new thought - um, SUPER unsure here. Like, what is the path supposed to be and still wondering a bout a thoughtId??
// must also push created thought's _id to the associated user's thoughts array field***
// url: port/api/thoughts
router.route('/:thoughtId').post(createThought);

// update/delete a thought by its _id
// url: port/api/thoughts/:_id
// router.route('/:thoughtId').put(updateThought).delete(deleteThought);

// add a reaction to a thought
// url: port/api/thoughts/:thoughtID/reactions
// router.route('/:thoughtId/reactions').post(addReaction)

// delete a reaction from a thought
// url: port/api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;
