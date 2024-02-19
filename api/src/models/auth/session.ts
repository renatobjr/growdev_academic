import apiResponse from "../../utils/apiResponse";
import token from "../../utils/token";
import knexConnect from "../../utils/knexConnect";

const session = async (tokenString: string) => {
  try {
    const response: any = token.verify(tokenString);
    if (!response) return apiResponse(401, "Unauthorized");

    const user: any = await knexConnect("users").where({ id: response._id }).first();
    return apiResponse(200, "OK", { user: user, token: tokenString});
  } catch (error: any) {
    return apiResponse(500, error.message);
  }
};

export default session;
