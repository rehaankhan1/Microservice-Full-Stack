import { UnauthorizedError } from "../errors/customError.js";
import User from "../model/UserModel.js";

export const getUser = async (req, res, next) => {
        const userId = req.user.userId;
        const user = await User.findOne({ _id: userId });

       req.user.email = user.email;
      next();

}
