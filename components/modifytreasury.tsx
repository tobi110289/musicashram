import type { NextPage } from "next";
import { GiLockedChest } from "react-icons/gi";
import { useGlobalContext } from "../utility/context";

const ModifyTreasury: NextPage = () => {
  const { treasury, setTreasury } = useGlobalContext();
  return (
    <div className="flex flex-col mb-8">
      <div className="flex m-auto">
        <GiLockedChest className="text-7xl" />
        <input
          className="self-center text-4xl"
          value={treasury}
          onChange={(e) => setTreasury(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default ModifyTreasury;
