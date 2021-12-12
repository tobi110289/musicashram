export interface IAdmin {
  username: string;
  password: string;
}

export interface IToken {
  accessToken?: string;
  admin?: string;
  error?: string;
  message?: string;
}

