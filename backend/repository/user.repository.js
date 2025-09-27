const UserModel = require("../model/user")

const getAllUsers = async() => await UserModel.find()
const getUserByEmail = async(email) =>await UserModel.findOne({email});

const createUser = async(user) => {
   const newUser = new UserModel({
    username: user.username,
    email:user.email,
    password:user.password,
    phoneNumber: user.phoneNumber
   })
   return await newUser.save()
}


module.exports = {
    getUserByEmail,
    createUser,
    getAllUsers
}