import type { NextPage } from "next";
import Dashboard from "./dashboard";
import Login from "./login";
import { useGlobalContext } from "../utility/context";

const Admin: NextPage = () => {
  const { isAuth } = useGlobalContext();
  return (
    <div className="bg-orange h-screen w-screen">
      {isAuth ? <Dashboard /> : <Login />}
    </div>
  );
};

export default Admin;
