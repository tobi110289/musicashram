import type { NextPage } from "next";
import { capitalizeFirstLetter } from "../helpers";
import { useGlobalContext } from "../utility/context";

const Header: NextPage = () => {
  const { admin, logout } = useGlobalContext();

  return (
    <div className="flex justify-end">
      <h1 className="">
        Welcome back {capitalizeFirstLetter(admin)}!
      </h1>
      <button
        className="w-20 mx-2 flex items-center justify-center rounded-md bg-black text-white-100 text-2xl"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
