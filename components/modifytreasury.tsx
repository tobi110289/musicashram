import type { NextPage } from "next";
import { useGlobalContext } from "../utility/context";
import { useState } from "react";

const ModifyTreasury: NextPage = () => {
  const { updateCurrentTreasury } = useGlobalContext();
  const [treasuryInput, setTreasuryInput] = useState<string | number>("");

  function handleClick(): void {
    if (treasuryInput > 0) {
      updateCurrentTreasury(treasuryInput as number);
    }
    setTreasuryInput("");
  }

  return (
    <div className="flex mx-auto">
      <input
        type="number"
        className="text-2xl w-16"
        value={treasuryInput}
        onChange={(e) => setTreasuryInput(+e.target.value)}
      />
      <p className="self-center text-2xl">€</p>
      <button
        className="w-20 mx-2 flex items-center justify-center rounded-md bg-black text-white-100 text-2xl"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default ModifyTreasury;
