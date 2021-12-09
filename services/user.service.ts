import { fetchRequest, options } from "./index";
import { IUser, INewUser } from "../interfaces/user";

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

function createNewUser(user: INewUser): Promise<IUser> {
  return fetchRequest("/user", options("POST", user));
}

export { getAllUsers, createNewUser };
