import type { NextPage } from "next";
import { useGlobalContext } from "../utility/context";
import { useState } from "react";

const SetNewDistributionDate: NextPage = () => {
  const [date, setDate] = useState("");
  const { setNewDistributionDate } = useGlobalContext();

  function handleClick() {
    date.length && setNewDistributionDate(date);
    setDate("");
  }

  return (
    <div className="flex flex-col">
      <input
        className="flex mx-auto"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="w-20 mx-auto my-2 rounded-md bg-black text-white-100 text-2xl"
      >
        New Date
      </button>
      <p className="mx-auto">⚠️ Will reset treasury ⚠️</p>
    </div>
  );
};

export default SetNewDistributionDate;
