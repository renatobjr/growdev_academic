import jwt from "jsonwebtoken";
import { tokenData } from "../@types/auth";

const secret: string = process.env.JWT_SECRET as string;

const token = {
  generate: (data: object): string => {
    const token: string = jwt.sign(data, secret, { expiresIn: "1h" });
    return token;
  },
  verify: (token: string): tokenData | boolean => {
    if (token != undefined) {
      return jwt.verify(token, secret) as unknown as tokenData;
    }
    return false;
  },
};

export default token;
