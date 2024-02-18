import { update as updateStudentType } from "../../@types/students";
import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";

const update = async (payload: updateStudentType, id: string) => {
  try {
    const { name, email } = payload;
    const student = await knexConnect("students")
      .where({ id });

    if (!student) {
      return apiResponse(404, "Not Found");
    }

    await knexConnect("students")
      .where({ id })
      .update({
        name,
        email,
      });

    return apiResponse(200, "OK");
  } catch (error:any) {
    apiResponse(500, error.message);
  }
}

export default update;
