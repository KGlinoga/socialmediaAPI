const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    // addFriend,
    // deleteFriend,
} = require('../../controllers/userController');

// get AND post(create)
//  /api/users 
router.route('/').get(getAllUsers);

// .post(createUser);

// get single users
//  url: port/api/users/:userID 
router.route('/:userId').get(getSingleUser);

// put/edit/update a single user
// ur: port/api/users/:userID 
router.route('/:userId').put(updateUser).delete(deleteUser);
// BONUS: remove a user's associated thoughts when deleted

// adding a friend, deleting a friend by userID and friendID (which I think is the other userID?)
// url: port/api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;