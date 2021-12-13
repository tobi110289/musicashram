import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utility/context";
import { useEffect, useState } from "react";
import { IUser, INewUser } from "../interfaces/user";
import { IAdmin } from "../interfaces/admin";
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
import { loginAdmin, getAdmin } from "../services/admin.service";
import { rndBg } from "../helpers";

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState<IUser[]>([]);
  const [treasury, setTreasury] = useState<number>(0);
  const [distributionDate, setDistributionDate] = useState<string>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [admin, setAdmin] = useState<string>("");
  const [bg, setBg] = useState<string>("");

  useEffect(() => {
    setBg(rndBg());
    getUsers();
    getCurrentTreasury();
    checkAdmin();
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
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const updatedTreasury = await updateTreasury(amount, accessToken);
      if (updatedTreasury && updatedTreasury[0]) {
        setTreasury(updatedTreasury[0].amount);
      }
    }
  }

  async function createUser(user: INewUser): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const newUser = await createNewUser(user, accessToken);
      if (users && users.length) setUsers((prev) => [...prev, newUser]);
      else setUsers([newUser]);
    }
  }

  async function setNewDistributionDate(date: string): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const newTreasury = await createTreasury(date, accessToken);
      setTreasury(newTreasury.amount);
      setDistributionDate(newTreasury.distributionDate);
    }
  }

  async function updateUser(user: IUser): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const newUser = await updateOneUser(user, accessToken);
      const userArray = users.filter((el) => el.id !== user.id);
      newUser && setUsers([...userArray, newUser]);
    }
  }

  async function deleteUser(id: number): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      await deleteOneUser(id, accessToken);
      const userArray = users.filter((el) => el.id !== id);
      setUsers(userArray);
    }
  }

  async function deleteAllTokens(): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const newUsers = await deleteAllUserTokens(accessToken);
      newUsers && setUsers(newUsers);
    }
  }

  async function adminLogin(admin: IAdmin): Promise<void> {
    const res = await loginAdmin(admin);
    if (res.error) {
      alert(`${res.message}`);
    } else {
      const { accessToken, admin } = res;
      accessToken && localStorage.setItem("accessToken", accessToken);
      setIsAuth(true);
      admin && setAdmin(admin);
    }
  }

  async function checkAdmin(): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const res = await getAdmin(accessToken);
      if (res.error) {
        alert(`${res.message}`);
      }
      if (res.admin) {
        setIsAuth(true);
        setAdmin(res.admin);
      }
    }
  }

  function logout() {
    localStorage.removeItem("accessToken");
    setIsAuth(false);
    setAdmin("");
  }

  return (
    <GlobalContext.Provider
      value={{
        bg,
        admin,
        users,
        treasury,
        distributionDate,
        isAuth,
        logout,
        setTreasury,
        updateCurrentTreasury,
        createUser,
        setNewDistributionDate,
        updateUser,
        deleteUser,
        deleteAllTokens,
        adminLogin,
      }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
