import { fetchRequest, options } from "./index";
import { IAdmin, IToken, IName } from "../interfaces/admin";

function loginAdmin(admin: IAdmin): Promise<IToken> {
  return fetchRequest("/adminlogin", options("POST", admin));
}

function getAdmin(accessToken: string): Promise<IName> {
  return fetchRequest("/admin", options("GET", undefined, accessToken));
}

export { loginAdmin, getAdmin };
