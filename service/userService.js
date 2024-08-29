
const { user } = require('../models/userSchema');


const createUser = async (userData) => {
    const user = new user(userData);
    return await user.save();
};
const getAllUsers = async (userData) => {

    return await user.find();
};


const findUserByEmail = async (email) => {
    return await user.findOne({ email });
};


const findUserById = async (id) => {

    return await user.findById(id);
};


const updateUserById = async (id, updateData) => {
    return await user.findByIdAndUpdate(id, updateData, { new: true });
};


const deleteUserById = async (id) => {
    return await user.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    findUserByEmail,
    findUserById,
    updateUserById,
    deleteUserById,
    getAllUsers,
};
