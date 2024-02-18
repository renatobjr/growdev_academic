import { create as createStudent } from "../../@types/students";
import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";
import students from "../../utils/students";

const create = async (payload: createStudent) => {
  try {
    const { name, email, cpf } = payload;
    let RA = students.generateRA();
    const student = await knexConnect("students").insert({
      RA,
      name,
      email,
      cpf,
      status: "active",
    });

    return apiResponse(201, "Created", student);
  } catch (error: any) {
    return apiResponse(500, error.message);
  }
};

export default create;
