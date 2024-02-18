import students from "../../models/students";
import { Request, Response, NextFunction } from "express";
import studentSchema from "../../schemas/students_schema";

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await studentSchema.delete.validateAsync(req.params.id, {
      abortEarly: false,
    });
    res.send(await students.remove({ id: req.params.id }));
  } catch (error) {
    next(error);
  }
}

export default remove;

