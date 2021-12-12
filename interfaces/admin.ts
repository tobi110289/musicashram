export interface IAdmin {
  username: string;
  password: string;
}

export interface IToken {
  accessToken?: string;
  error?: string;
  message?: string;
}

export interface IName {
  admin?: string;
  error?: string;
  message?: string;
}
