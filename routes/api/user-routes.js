const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/user-controller");

//Set up get and post routes at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//Set up get one, put and delete at /api/users/id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// api/users/:userid/friends
router
    .route('/:userId/friends/:friendsId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router;