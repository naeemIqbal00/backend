const asyncWrapper = require('../utils/asynWrapper');
const { user } = require("../models/userSchema")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    successResponse,
    failureResponse,
} = require('../utils/response');
const {
    createUser,
    findUserByEmail,
} = require('../service/userService');


const handleSignUp = async (req, res) => {
    const { name, email, password } = req.body;


    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        return failureResponse(res, 'User already exists', {}, 400);
    } else {
        const hashedPassword = await bcrypt.hash(password, 12);
        try {
            const newUser = await createUser({ name, email, password: hashedPassword, });
            return successResponse(res, 'User registered successfully', {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }, 201);
        } catch (error) {
            console.log("[handleSignUp]", error);
        }
    }


};


const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    const my_user = await findUserByEmail(email);
    if (my_user) {


        const hashedPassword = await bcrypt.compare(password, my_user.password);

        if (hashedPassword) {
            const token = jwt.sign(
                { userId: my_user._id, email: my_user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
            return successResponse(res, 'Logined Succesfully', {
                user: {
                    _id: my_user._id,
                    name: my_user.name,
                    email: my_user.email,
                },
                access_token: token,
            }, 200,)
        } else {
            return failureResponse(res, 'Email or password is wrong', {}, 400);
        }


    } else {
        return failureResponse(res, 'Email or password is wrong', {}, 400);
    }

}




module.exports = { handleSignUp, handleLogin }