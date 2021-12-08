import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IUser } from "../interfaces/user";

export type GlobalContent = {
  users: IUser[];
  treasury: number;
  distributionDate: string;
  setTreasury: Dispatch<SetStateAction<number>>;
  updateCurrentTreasury: (amount: number) => Promise<void>;
  createUser: (user: IUser) => Promise<void>;
};

export const GlobalContext = createContext<GlobalContent>({
  users: [],
  treasury: 0,
  distributionDate: "",
  setTreasury: () => {},
  updateCurrentTreasury: () => new Promise((resolve) => resolve()),
  createUser: () => new Promise((resolve) => resolve()),
});

export const useGlobalContext = () => useContext(GlobalContext);
