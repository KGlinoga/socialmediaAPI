const{ User } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .populate('thoughts')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
   //  create a new user
    createUser(req,res) {
        User.create(req.body)
            .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // get a single user
    getSingleUser(req,res){
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No User with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },    

    updateUser(req,res){
        User.findOneAndUpdate({ _id: req.params.userId})
        .then((user) =>
        !user
            ? res.status(404).json({ message: 'No post with that ID' })
            : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
   
    // User.findOneAndUpdate({ _id: req.params.userId }, (err, result) => {
    //     if (result) {
    //         res.status(200).json(result);
    //         console.log(`Updated: ${result}`);
    //     } else {
    //         console.log('Uh oh, something went wrong');
    //         res.status(500).json({ message: 'something went wrong' });
    
    //     }});
},

    deleteUser(req,res){
        User.findOneAndDelete({ _id: req.params.userId }, (err, result) => {
            if (result) {
                res.status(200).json(result);
                console.log(`Deleted: ${result}`);
            } else {
                console.log('Uh oh, something went wrong');
                res.status(500).json({ message: 'something went wrong' });
            }

    // still need addFriend and deleteFriend ....
    
        });  
    }};