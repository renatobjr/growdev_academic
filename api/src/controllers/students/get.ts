import students from "../../models/students";
import { Request, Response, NextFunction } from "express";
import studentSchema from "../../schemas/students_schema";

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await studentSchema.get.validateAsync(req.params, {
      abortEarly: false,
    });
    res.send(await students.get({ id: req.params.id }));
  } catch (error) {
    next(error);
  }
}

export default get;
