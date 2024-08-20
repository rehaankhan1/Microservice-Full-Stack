import { UnauthenticatedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";


export const authenticateUser = async (req, res, next) => {
    const {token} = req.cookies;
    if(!token) return res.status(400).json({ error: 'Please Sign in.' });
    

    try {
        const { userId, role } = verifyJWT(token);
        
        req.user = {userId, role};
        next();
    } catch (error) {
        return res.status(400).json({ error: 'Access Invalid.' });
    } 

};

export const authorizePermissions = (...roles) => {
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
         return res.status(400).json({ error: 'Unauthorized to access this route.' });
        }
        next();
    };
};