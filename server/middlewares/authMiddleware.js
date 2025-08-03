import jwt from "jsonwebtoken";
import CustomError from "../utils/customError.js";

const authMiddleware = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new CustomError("Unauthorized: No token provided", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return next(new CustomError("Unauthorized: Invalid token", 401));
    }

    req.userId = decoded.id;
    next();
  } catch (err) {
    return next(
      new CustomError("Unauthorized: Token verification failed", 401)
    );
  }
};

export default authMiddleware;
