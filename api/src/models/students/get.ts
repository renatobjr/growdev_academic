import { get as getStudent } from "../../@types/students";
import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";

const get = async (payload: getStudent) => {
  try {
    const { id } = payload;
    const student = await knexConnect("students").where({ id, status: "active" });

    if (!student) {
      return apiResponse(404, "Not Found");
    }

    return apiResponse(200, "OK", student);

  } catch (error: any) {
    return apiResponse(500, error.message);
  }
}

export default get;
