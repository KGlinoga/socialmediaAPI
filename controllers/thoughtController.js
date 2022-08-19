const { User, Thought } = require('../models');

module.exports = {
    getAllThoughts(req,res) {
        Thought.find()
            .then((comment) => res.json(comment))
            .catch((err) => res.status(500).json(err));
    },
    // single thought
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((comment) => 
            !comment
                ? res.status(404).json({ message: 'No Thought found with that id'})
                : res.json(comment)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create new thought
    createThought(req,res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.postId },
                    { $push: { thought: comment._id} },
                    { new: true}
                );
            })
            .then((user) =>
            !user
                ?res
                    .status(404)
                    .json({ message: 'thought created, but no users with this ID!' })
                : res.json({ message: 'Thought created!' })
            )
            .catch((err) => {
                console.error(err);
            });
    },
};