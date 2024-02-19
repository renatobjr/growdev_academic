import bcrypt from "bcryptjs";

const auth = {
  isValidPassword: (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
  },
};

export default auth;
