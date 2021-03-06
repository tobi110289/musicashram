import { fetchRequest, options } from "./index";
import { IAdmin, IToken } from "../interfaces/admin";

function loginAdmin(admin: IAdmin): Promise<IToken> {
  return fetchRequest("/adminlogin", options("POST", admin));
}

function getAdmin(accessToken: string): Promise<IToken> {
  return fetchRequest("/admin", options("GET", undefined, accessToken));
}

function createAdmin(admin: IAdmin): Promise<IToken> {
  return fetchRequest("/admincreate", options("POST", admin));
}

export { loginAdmin, getAdmin, createAdmin };
