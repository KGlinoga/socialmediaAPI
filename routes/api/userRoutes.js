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
router.route('/').get(getAllUsers).post(createUser);

// get single users
//  url: port/api/users/:userID 
// router.route('/:userId').get(getSingleUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);


// put/edit/update a single user
// url: port/api/users/:userID 
// router.route('/:userId').put(updateUser);

// router.route('/:userId').delete(deleteUser);
// BONUS: remove a user's associated thoughts when deleted

// still needs a controller!
// /api/users/:userId/friends
// router.route('/:userId/friends').post(addFriend);

// adding a friend, deleting a friend by userID and friendID (which I think is the other userID?)
// still needs a controller!
// url: port/api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;