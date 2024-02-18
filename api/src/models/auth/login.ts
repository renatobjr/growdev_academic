import { login as loginType } from "../../@types/auth";
import { get as getUser } from "../../@types/user";
import knexConnect from "../../utils/knexConnect";
import apiResponse from "../../utils/apiResponse";
import auth from "../../utils/auth";
import token from "../../utils/token";

const login = async (payload: loginType) => {
  try {
    const { username, password } = payload;
    const user: getUser | null = await knexConnect("users")
      .where({ username })
      .andWhere({ status: "active" })
      .first();

    if (!user) {
      return apiResponse(401, "Unauthorized");
    }

    const isValidPassword: boolean = auth.isValidPassword(
      password,
      user.password
    );
    if (!isValidPassword) {
      return apiResponse(401, "Unauthorized");
    }

    const generatedToken: string = token.generate({ _id: user.id });

    return apiResponse(200, "OK", {
      user: user,
      token: generatedToken,
    });
  } catch (error: any) {
    return apiResponse(500, error.message);
  }
};

export default login;
