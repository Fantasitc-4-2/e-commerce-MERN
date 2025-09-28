const bcrypt = require("bcrypt")
const repository = require("../repository/user.repository")


const register = async (userData) =>{
  const requiredFields = ["email", "password", "username", "phoneNumber"];
  for (const field of requiredFields) {
    if (!userData[field]) {
      throw new Error(`${field} is required`);
    }
  }

  const user = await repository.getUserByEmail(userData.email);
  if(user){
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password,10);
  return await repository.createUser({...userData,password:hashedPassword});
}



module.exports ={
    register
}