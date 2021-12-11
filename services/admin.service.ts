import { fetchRequest, options } from "./index";
import { IAdmin, IToken } from "../interfaces/admin";

function loginAdmin(admin: IAdmin): Promise<IToken> {
  return fetchRequest("/adminlogin", options("POST", admin));
}

export { loginAdmin };
