import UserModel from "../model/user.js";
import mongoose from "mongoose";

/// Get user(s)
export const getAllUsers = async () => await UserModel.find();
export const getUserByEmail = async (email) => await UserModel.findOne({ email });
export const getUserById = async (userId) => await UserModel.findById(userId);

// Create user
export const createUser = async (user) => {
  const existingUser = await getUserByEmail(user.email);
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const newUser = new UserModel({
    username: user.username,
    email: user.email,
    password: user.password,
    otp: user.otp,
    otpExpires: user.otpExpires,
    phoneNumber: user.phoneNumber,
  });

  return await newUser.save();
};
