import { createContext, useContext } from "react";
import { IUser } from "../interfaces/user";

export type GlobalContent = {
  users: IUser[];
  treasury: number;
  distributionDate: string;
};

export const GlobalContext = createContext<GlobalContent>({
  users: [],
  treasury: 0,
  distributionDate: "",
});

export const useGlobalContext = () => useContext(GlobalContext);
