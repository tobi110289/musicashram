import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { IUser } from "../interfaces/user";

export type GlobalContent = {
  users: IUser[];
  treasury: number;
  distributionDate: string;
  setTreasury: Dispatch<SetStateAction<number>>;
};

export const GlobalContext = createContext<GlobalContent>({
  users: [],
  treasury: 0,
  distributionDate: "",
  setTreasury: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
