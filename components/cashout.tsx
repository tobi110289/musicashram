import type { NextPage } from "next";
import { calculateDaysLeft } from "../helpers";
import moment from "moment";
import { GiShinyPurse } from "react-icons/gi";

interface ICashout {
  cashoutDate: string;
}

const Cashout: NextPage<ICashout> = ({ cashoutDate }) => {
  const daysLeft = calculateDaysLeft(cashoutDate, Date.now());
  const formatedCashoutDate = moment(new Date(cashoutDate)).format(
    "MMMM Do YYYY"
  );
  return (
    <div className="flex flex-col mb-8 m-auto">
      <div className="flex self-center m-2">
        <GiShinyPurse className="text-7xl mr-2" />
        <p className="m-auto text-xl">
          Next distribution in <strong>{daysLeft}</strong> days.
        </p>
      </div>
      <p className="italic m-auto">({formatedCashoutDate})</p>
    </div>
  );
};

export default Cashout;
