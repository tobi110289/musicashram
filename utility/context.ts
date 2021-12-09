import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IUser, INewUser } from "../interfaces/user";

export type GlobalContent = {
  users: IUser[];
  treasury: number;
  distributionDate: string;
  setTreasury: Dispatch<SetStateAction<number>>;
  updateCurrentTreasury: (amount: number) => Promise<void>;
  createUser: (user: INewUser) => Promise<void>;
  updateUser: (user: IUser) => Promise<void>;
  setNewDistributionDate: (date: string) => Promise<void>;
};

export const GlobalContext = createContext<GlobalContent>({
  users: [],
  treasury: 0,
  distributionDate: "",
  setTreasury: () => {},
  updateCurrentTreasury: () => new Promise((resolve) => resolve()),
  createUser: () => new Promise((resolve) => resolve()),
  updateUser: () => new Promise((resolve) => resolve()),
  setNewDistributionDate: () => new Promise((resolve) => resolve()),
});

export const useGlobalContext = () => useContext(GlobalContext);
