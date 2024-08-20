import { UnauthenticatedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) throw new UnauthenticatedError('authentication1 invalid');

    try {
        const { userId, role } = verifyJWT(token);
        
       req.user = {userId, role};
        next();
    } catch (error) {
        throw new UnauthenticatedError('authentication2 invalid');
    } 

   
};

export const authorizePermissions = (...roles) => {
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            throw new UnauthenticatedError('Unauthorized to access this route');  
        }
        next();
    };
};

