import { fetchRequest, options } from "./index";
import { IUser } from "../interfaces/user";

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

function createNewUser(user: IUser): Promise<IUser> {
  console.log(user);
  return fetchRequest("/user", options("POST", user));
}

export { getAllUsers, createNewUser };
