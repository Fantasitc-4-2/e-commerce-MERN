const UserModel = require("../model/user")
const mongoose = require("mongoose");

///get user(s)
const getAllUsers = async() => await UserModel.find()
const getUserByEmail = async (email) => await UserModel.findOne({ email });
const getUserById = async (userId) =>  await UserModel.findById(userId);



//post user(s)
const createUser = async(user) => {
   const existingUser = await getUserByEmail(user.email);
   if (existingUser) {
      throw new Error("Email already in use");
   }
   const newUser = new UserModel({
      username: user.username,
      email: user.email,
      password: user.password,
      otp:user.otp,
      otpExpires:user.otpExpires,
      phoneNumber: user.phoneNumber
   });
   return await newUser.save();
};


module.exports = {
    getUserByEmail,
    createUser,
    getAllUsers,
    getUserById
}