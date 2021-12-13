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
        className="border-darkred shadow appearance-none border rounded w-48 h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline text-2xl mx-auto"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        onClick={() => {
          const result = confirm("Are you sure you want to reset the treasury and set a new distribution date?");
          if (result) {
            handleClick();
          }
        }}
        className="w-32 mx-auto my-2 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-darkred text-white-100 hover:bg-grey-800 text-base"
      >
        New Date
      </button>
      <p className="mx-auto">⚠️ Will reset treasury ⚠️</p>
    </div>
  );
};

export default SetNewDistributionDate;
