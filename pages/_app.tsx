import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utility/context";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/user";
import { getAllUsers } from "../services/user.service";
import { getAllTreasuries } from "../services/treasury.service";

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

  return (
    <GlobalContext.Provider
      value={{
        users,
        treasury,
        distributionDate,
        setTreasury,
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
