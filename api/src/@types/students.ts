export type create = {
  name: string;
  email: string;
  cpf: string;
};

export type update = {
  name?: string;
  email?: string;
};

export type remove = {
  id: string;
}

export type get = {
  id: string;
}
