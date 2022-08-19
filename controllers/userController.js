const { User } = require('../models');

module.exports = {
    getAllUsers(req, res){
        User.find()
        .then((user) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
   //  create a new user
    createUser(req,res) {
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    // get a single user
    getSingleUser(req,res){
        User.findOne({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No post with that ID' })
                    : res.json(post)
            )
            .catch((err) => res.status(500).json(err));
    },
//  where we're leaving at the beginning of Friday***
    {
    updateUser(req,res){
        User.
    }
    }
};