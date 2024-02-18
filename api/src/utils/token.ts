import jwt from "jsonwebtoken";

const secret: string = process.env.JWT_SECRET as string;

const token = {
  generate: (data: object): string => {
    const token: string = jwt.sign(data, secret, { expiresIn: "1h" });
    return token;
  },
};

export default token;
