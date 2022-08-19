const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

// get AND post(create)
//  /api/user 
router.route('/').get(getAllUsers).post(createUser);

// get single user
//  url: port/api/user/:userID 
router.route('/:userId').get(getSingleUser);

// put/edit/update a single user
// ur: port/api/user/:userID 
router.route('/:userId').put(updateUser).delete(deleteUser);

module.exports = router;