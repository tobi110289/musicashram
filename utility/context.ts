import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IUser, INewUser } from "../interfaces/user";
import { IAdmin } from "../interfaces/admin";

export type GlobalContent = {
  admin: string;
  users: IUser[];
  treasury: number;
  distributionDate: string;
  isAuth: boolean;
  setTreasury: Dispatch<SetStateAction<number>>;
  updateCurrentTreasury: (amount: number) => Promise<void>;
  createUser: (user: INewUser) => Promise<void>;
  updateUser: (user: IUser) => Promise<void>;
  adminLogin: (admin: IAdmin) => Promise<void>;
  logout: () => void;
  deleteUser: (id: number) => Promise<void>;
  setNewDistributionDate: (date: string) => Promise<void>;
  deleteAllTokens: () => Promise<void>;
};

export const GlobalContext = createContext<GlobalContent>({
  admin: "",
  users: [],
  treasury: 0,
  distributionDate: "",
  isAuth: false,
  setTreasury: () => {},
  updateCurrentTreasury: () => new Promise((resolve) => resolve()),
  createUser: () => new Promise((resolve) => resolve()),
  logout: () => {},
  updateUser: () => new Promise((resolve) => resolve()),
  deleteUser: () => new Promise((resolve) => resolve()),
  adminLogin: () => new Promise((resolve) => resolve()),
  deleteAllTokens: () => new Promise((resolve) => resolve()),
  setNewDistributionDate: () => new Promise((resolve) => resolve()),
});

export const useGlobalContext = () => useContext(GlobalContext);
