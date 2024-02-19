import auth from "../../models/auth";
import { Request, Response, NextFunction } from "express";

const session = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await auth.session(req.headers.authorization as string));
  } catch (error) {
    next(error);
  }
}

export default session;
