import students from "../../models/students";
import { Request, Response, NextFunction } from "express";
import studentSchema from "../../schemas/students_schema";

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await studentSchema.update.validateAsync(req.body, {
      abortEarly: false,
    });
    res.send(await students.update(req.body, req.params.id));
  } catch (error) {
    next(error);
  }
}

export default update;
