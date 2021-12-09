import type { NextPage } from "next";
import { useGlobalContext } from "../utility/context";
import { returnTotalTokens } from "../helpers";

const TotalTime: NextPage = () => {
  const { users } = useGlobalContext();
  const totalHours = returnTotalTokens(users);

  return <p className="mx-auto my-5 italic text-s text-center w-2/3">Together we gave at least <strong>{totalHours}</strong> hours to the Ashram this year!</p>;
};

export default TotalTime;
