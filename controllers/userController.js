const asyncWrapper = require('../utils/asynWrapper');
const { User } = require("../models/userSchema")
// const User = require('../models/userSchema');
const {
    successResponse,
    failureResponse,
} = require('../utils/response');
const {
    createUser,
    findUserByEmail,
    findUserById,
    updateUserById,
    getAllUsers,
    deleteUserById,
} = require('../service/userService');


const handleSignUp = asyncWrapper(async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return failureResponse(res, 'User already exists', {}, 400);
    }

    const newUser = await createUser({ name, email, password });
    return res.send({

        message: 'User registered successfully',
        data: {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
        },

    })

    // successResponse(res, 'User registered successfully', {
    //     _id: newUser._id,
    //     name: newUser.name,
    //     email: newUser.email,
    // }, 201,);
});

const fetchAllUsers = asyncWrapper(async (res) => {
    const users = await getAllUsers();

    if (!users.length) {
        return failureResponse(res, 'No users found', {}, 404);
    }

    return successResponse(res, 'Users retrieved successfully', users);



});


module.exports = { handleSignUp, fetchAllUsers }