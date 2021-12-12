import { fetchRequest, options } from "./index";
import { IUser, INewUser } from "../interfaces/user";

function getAllUsers(): Promise<IUser[]> {
  return fetchRequest("/users");
}

function createNewUser(user: INewUser, accessToken: string): Promise<IUser> {
  return fetchRequest("/user", options("POST", user, accessToken));
}

function updateOneUser(user: IUser, accessToken: string): Promise<IUser> {
  return fetchRequest(`/user/${user.id}`, options("PUT", user, accessToken));
}
function deleteOneUser(id: number, accessToken: string): Promise<IUser> {
  return fetchRequest(`/user/${id}`, options("DELETE", undefined, accessToken));
}
function deleteAllUserTokens(accessToken: string): Promise<IUser[]> {
  return fetchRequest(`/usertokens`, options("PUT", undefined, accessToken));
}

export {
  getAllUsers,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  deleteAllUserTokens,
};
