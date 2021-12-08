import type { NextPage } from "next";
import { GiLockedChest } from "react-icons/gi";
import { useGlobalContext } from "../utility/context";

const Treasury: NextPage = () => {
  const { treasury } = useGlobalContext();
  return (
    <div className="flex flex-col my-8">
      <div className="flex m-auto">
        <GiLockedChest className="text-7xl" />
        <p className="self-center text-4xl">: {treasury} €</p>
      </div>
      <p className="m-auto italic">(Total amount in treasury)</p>
    </div>
  );
};

export default Treasury;
