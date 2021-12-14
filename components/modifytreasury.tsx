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
    <div className="flex flex-col mx-auto">
      <div className="flex mb-2">
        <input
          type="number"
          placeholder="Amount"
          className="border-darkred shadow appearance-none border rounded w-32 h-12 py-2 px-3 bg-yellow placeholder-orange text-darkred leading-tight focus:outline-none focus:shadow-outline text-2xl"
          value={treasuryInput}
          onChange={(e) => setTreasuryInput(+e.target.value)}
        />
        <p className="self-center text-2xl mx-1">€</p>
      </div>
      <button
        className="w-16 mx-auto h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-darkred text-white-100 hover:bg-grey-800 text-base"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default ModifyTreasury;
