const { User, Thought } = require('../models');

module.exports = {
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // single thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No Thought found with that id' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'thought created, but no users with this ID!' })
                    :
                    res.json({ message: 'Thought created!' })
            )
            .catch((err) => {
                console.error(err);
            });
    },


    // update thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'No course with this ID!' })
                    : res.json(thought)
            )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'thought created, but no users with this ID!' })
                    :
                    res.json({ message: 'Thought created!' })
            )
            .catch((err) => {
                console.error(err);
            });
    },

    // delete thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'No thought with that ID' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ msg: 'Thought deleted!' })
                    : res.json({ msg: 'Thought forgotten!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            })
    }
}