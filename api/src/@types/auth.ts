export type login = {
  username: string;
  password: string;
};

export type tokenData = {
  _id: number;
  iat: Date;
  exp: Date;
};
