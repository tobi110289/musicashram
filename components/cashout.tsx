import type { NextPage } from "next";
import { calculateDaysLeft } from "../helpers";
import moment from "moment";
import { GiShinyPurse } from "react-icons/gi";
import { useGlobalContext } from "../utility/context";

const Cashout: NextPage = () => {
  const { distributionDate } = useGlobalContext();

  const daysLeft = calculateDaysLeft(distributionDate, Date.now());
  const formatedDistributionDate = moment(new Date(distributionDate)).format(
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
      <p className="italic m-auto">({formatedDistributionDate})</p>
    </div>
  );
};

export default Cashout;
