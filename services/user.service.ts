import { fetchRequest, options } from "./index";
import { IUser } from "../interfaces/user";

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

export { getAllUsers };
