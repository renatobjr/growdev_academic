import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";

const list = async() => {
  try {
    const students = await knexConnect("students").select();

    return apiResponse(200, "OK", students);
  } catch (error: any) {
    return apiResponse(500, error.message);
  }
}

export default list;
