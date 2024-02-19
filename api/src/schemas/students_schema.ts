import Joi from "joi";
import { ValidatorSchema } from "../@types/common";

const studentSchema: ValidatorSchema = {
  create: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().required(),
  }),
  update: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
  }),
  delete: Joi.object({
    id: Joi.number().required(),
  }),
  get: Joi.object({
    id: Joi.number().required(),
  })
}

export default studentSchema;
