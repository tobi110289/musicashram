import type { NextPage } from "next";
import { calculateDaysLeft, isDateInPast, isDateToday } from "../helpers";
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
    if (daysLeft !== null) {
      if (isDateToday(date))
        return (
          <p className="m-auto text-xl">
            Distribution started <strong>today</strong>!
          </p>
        );
      return isDateInPast(date) ? (
        <p className="m-auto text-xl">
          Last distribution started <strong>{daysLeft}</strong> day
          {daysLeft > 1 && "s"} ago.
        </p>
      ) : (
        <p className="m-auto text-xl">
          Next distribution in <strong>{daysLeft}</strong> day
          {daysLeft > 1 && "s"}.
        </p>
      );
    }
  }

  return (
    <div className="flex flex-col mb-8 mx-auto">
      <div className="flex self-center m-2">
        <GiShinyPurse className="text-7xl mr-2" />
        {daysLeft !== null ? (
          nextDistribution(distributionDate)
        ) : (
          <p className="m-auto text-xl">No distribution planned</p>
        )}
      </div>
      {daysLeft !== null ? (
        <p className="italic m-auto">({formatedDistributionDate})</p>
      ) : null}
    </div>
  );
};

export default Cashout;
