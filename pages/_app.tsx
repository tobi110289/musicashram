import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../utility/context";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/user";
import ApiService from "../services/user.service";

function MyApp({ Component, pageProps }: AppProps) {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const users = await ApiService.getAllUsers();
      setUsers(users);
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ users, treasury: 43995, distributionDate: "2022-06-01" }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
