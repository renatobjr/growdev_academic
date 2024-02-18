import students from "../../models/students";
import { Request, Response, NextFunction } from "express";

const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await students.list());
  } catch (error) {
    next(error);
  }
}

export default list;
