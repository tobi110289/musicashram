import type { NextPage } from "next";
import Dashboard from "./dashboard";
import Login from "./login";
import { useGlobalContext } from "../utility/context";

const Admin: NextPage = () => {
  const { isAuth } = useGlobalContext();
  return (
    <div
      className="bg-img3 bg-cover bg-no-repeat bg-center min-h-screen w-screen"
    >
      {isAuth ? <Dashboard /> : <Login />}
      <div className="bg-orange opacity-50 z-0 min-h-screen w-sceen"></div>
    </div>
  );
};

export default Admin;
