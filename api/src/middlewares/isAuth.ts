import apiResponse from "../utils/apiResponse";
import token from "../utils/token";
import knexConnect from "../utils/knexConnect";

const isAuth = async (req: any, res: any, next: any) => {
  try {
    const tokenReceived = req.headers.authorization;
    const tokenData: any = token.verify(tokenReceived);
    const user = await knexConnect("users").where({ id: tokenData._id }).first();

    if (!user) return apiResponse(401, "Unauthorized");

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuth;
