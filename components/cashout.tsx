import type { NextPage } from "next";
import { calculateDaysLeft, isDateInPast } from "../helpers";
import moment from "moment";
import { GiShinyPurse } from "react-icons/gi";
import { useGlobalContext } from "../utility/context";

const Cashout: NextPage = () => {
  const { distributionDate } = useGlobalContext();

  const daysLeft = calculateDaysLeft(distributionDate, Date.now());
  const formatedDistributionDate = moment(new Date(distributionDate)).format(
    "MMMM Do YYYY"
  );

  function nextDistribution(date: string) {
    return isDateInPast(date) ? (
      <p className="m-auto text-xl">
        Last distribution started <strong>{daysLeft}</strong> days ago.
      </p>
    ) : (
      <p className="m-auto text-xl">
        Next distribution in <strong>{daysLeft}</strong> days.
      </p>
    );
  }

  return (
    <div className="flex flex-col mb-8 mx-auto">
      <div className="flex self-center m-2">
        <GiShinyPurse className="text-7xl mr-2" />
        {daysLeft ? (
          nextDistribution(distributionDate)
        ) : (
          <p className="m-auto text-xl">No distribution planned</p>
        )}
      </div>
      {daysLeft ? (
        <p className="italic m-auto">({formatedDistributionDate})</p>
      ) : null}
    </div>
  );
};

export default Cashout;
