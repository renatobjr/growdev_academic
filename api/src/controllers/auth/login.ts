import auth from "../../models/auth";
import { Request, Response, NextFunction } from "express";
import userSchema from "../../schemas/users_schema";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await userSchema.login.validateAsync(req.body, {
      abortEarly: false,
    });
    res.send(await auth.login(req.body));
  } catch (error) {
    next(error);
  }
};

export default login;
