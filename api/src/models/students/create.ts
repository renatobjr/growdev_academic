import { create as createStudent } from "../../@types/students";
import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";

const create = async (payload: createStudent) => {
  try {
    const { name, email, cpf } = payload;
    const student = await knexConnect("students").insert({
      name,
      email,
      cpf,
    });

    return apiResponse(201, "Created", student);
  } catch (error: any) {
    return apiResponse(500, error.message);
  }
};

export default create;
