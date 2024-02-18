import Joi from "joi";
import { ValidatorSchema } from "../@types/common";

const userSchema: ValidatorSchema = {
  login: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(3).required(),
  }),
};

export default userSchema;
