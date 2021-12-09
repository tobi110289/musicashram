import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utility/context";
import { useEffect, useState } from "react";
import { IUser, INewUser } from "../interfaces/user";
import { getAllUsers, createNewUser } from "../services/user.service";
import {
  getAllTreasuries,
  updateTreasury,
  createTreasury,
} from "../services/treasury.service";

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [treasury, setTreasury] = useState<number>(0);
  const [distributionDate, setDistributionDate] = useState<string>("");

  useEffect(() => {
    getUsers();
    getCurrentTreasury();
  }, []);

  async function getUsers(): Promise<void> {
    const users = await getAllUsers();
    setUsers(users);
  }

  async function getCurrentTreasury(): Promise<void> {
    const treasuries = await getAllTreasuries();
    const currentTreasury = treasuries.find((el) => el.current);
    if (currentTreasury) {
      setTreasury(currentTreasury.amount);
      setDistributionDate(currentTreasury.distributionDate);
    }
  }

  async function updateCurrentTreasury(amount: number): Promise<void> {
    const updatedTreasury = await updateTreasury(amount);
    if (updatedTreasury && updatedTreasury[0]) {
      setTreasury(updatedTreasury[0].amount);
    }
  }

  async function createUser(user: INewUser): Promise<void> {
    const newUser = await createNewUser(user);
    setUsers((prev) => [...prev, newUser]);
  }

  async function setNewDistributionDate(date: string): Promise<void> {
    const newTreasury = await createTreasury(date);
    setTreasury(newTreasury.amount);
    setDistributionDate(newTreasury.distributionDate);
  }

  return (
    <GlobalContext.Provider
      value={{
        users,
        treasury,
        distributionDate,
        setTreasury,
        updateCurrentTreasury,
        createUser,
        setNewDistributionDate,
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
