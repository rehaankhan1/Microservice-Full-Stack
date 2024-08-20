import { UnauthenticatedError , BadRequestError } from "../errors/customError.js"; // BadRequesterror added
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) throw new UnauthenticatedError('authentication1 invalid');

    try {
        const { userId, role } = verifyJWT(token);
        const testUser = userId === '65bd06e9da829d5ac2caab86' // testuser access restricted
        req.user = {userId, role, testUser};
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

export const checkForTestUser = (req, res, next) =>{
    if(req.user.testUser) throw new BadRequestError('Demo User, Please Sign In !');   
    next();
};