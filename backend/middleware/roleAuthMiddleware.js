// depend on settind a user on the req object in a authentication middleware
const authorizeUser = (role) => {
    return (req, res, next) => {
        const user = req.user;
        if(!user) {
            return res.status(401).send({error : "User is not found"});
        }

        if(!user.role === role) {
            return res.status(404).send({error : "Forbidden access to a resource"});
        }
        next();
    }
}

export default authorizeUser;