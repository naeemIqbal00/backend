
const { user } = require('../models/userSchema');


const createUser = async (userData) => {
    const myUser = await user.create(userData);
    return myUser;
};



const findUserByEmail = async (email) => {
    return await user.findOne({ email });
};







const deleteUserById = async (id) => {
    return await user.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    findUserByEmail,
    deleteUserById,
};
