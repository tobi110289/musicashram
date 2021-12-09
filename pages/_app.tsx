import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utility/context";
import { useEffect, useState } from "react";
import { IUser, INewUser } from "../interfaces/user";
import { ITreasury } from "../interfaces/treasury";
import {
  getAllUsers,
  createNewUser,
  updateOneUser,
  deleteOneUser,
  deleteAllUserTokens,
} from "../services/user.service";
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
    let currentTreasury;
    const treasuries = await getAllTreasuries();
    if (treasuries) currentTreasury = treasuries.find((el) => el.current);
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
    if (users && users.length) setUsers((prev) => [...prev, newUser]);
    else setUsers([newUser]);
  }

  async function setNewDistributionDate(date: string): Promise<void> {
    const newTreasury = await createTreasury(date);
    setTreasury(newTreasury.amount);
    setDistributionDate(newTreasury.distributionDate);
  }

  async function updateUser(user: IUser): Promise<void> {
    const newUser = await updateOneUser(user);
    const userArray = users.filter((el) => el.id !== user.id);
    newUser && setUsers([...userArray, newUser]);
  }

  async function deleteUser(id: number): Promise<void> {
    await deleteOneUser(id);
    const userArray = users.filter((el) => el.id !== id);
    setUsers(userArray);
  }

  async function deleteAllTokens(): Promise<void> {
    const newUsers = await deleteAllUserTokens();
    newUsers && setUsers(newUsers);
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
        updateUser,
        deleteUser,
        deleteAllTokens,
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
