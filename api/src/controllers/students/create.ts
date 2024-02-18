import students from "../../models/students";
import { Request, Response, NextFunction } from "express";
import studentSchema from "../../schemas/students_schema";

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await studentSchema.create.validateAsync(req.body, {
      abortEarly: false,
    });
    res.send(await students.create(req.body));
  } catch (error) {
    next(error);
  }
}

export default create;
