const bcrypt = require("bcrypt")
const repository = require("../repository/user.repository")
const register = async (userData) =>{
    try{
        if(!userData.email || !userData.password || !userData.username || !userData.phoneNumber){
        throw new Error ("All fields are required")
    }
    const user = await repository.getUserByEmail(userData.email) || null;
    console.log(user)
    if(user){
        throw new Error ("Cannot create new account");
    }
    const hashedPassword = await bcrypt.hash(userData.password,10)
    const newUser = await repository.createUser({...userData,password:hashedPassword})
    return newUser
    }catch(err){
        return {error:err.message}
    }
}

module.exports ={
    register
}