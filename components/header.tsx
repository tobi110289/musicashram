import type { NextPage } from "next";
import { capitalizeFirstLetter } from "../helpers";
import { useGlobalContext } from "../utility/context";

const Header: NextPage = () => {
  const { admin, logout } = useGlobalContext();

  return (
    <div className="flex justify-end mt-2">
      <h1 className="my-auto">Welcome back {capitalizeFirstLetter(admin)}!</h1>
      <button
        className="w-20 mx-2 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-darkred text-yellow hover:bg-grey-800 text-base"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
