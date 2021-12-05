import type { NextPage } from "next";
import { GiLockedChest } from "react-icons/gi";

interface ITreasury {
  total: number;
}

const Treasury: NextPage<ITreasury> = ({ total }) => {
  return (
    <div className="flex flex-col my-8">
      <div className="flex m-auto">
        <GiLockedChest className="text-7xl" />
        <p className="self-center text-4xl">: {total} €</p>
      </div>
      <p className="m-auto italic">(Total amount in treasury)</p>
    </div>
  );
};

export default Treasury;
