import { fetchRequest, options } from "./index";
import { IUser, INewUser } from "../interfaces/user";

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

function createNewUser(user: INewUser): Promise<IUser> {
  return fetchRequest("/user", options("POST", user));
}

function updateOneUser(user: IUser): Promise<IUser> {
  return fetchRequest(`/user/${user.id}`, options("PUT", user));
}

export { getAllUsers, createNewUser, updateOneUser };
