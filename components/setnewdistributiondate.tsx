import type { NextPage } from "next";
import { GiLockedChest } from "react-icons/gi";
import { useGlobalContext } from "../utility/context";

const SetNewDistributionDate: NextPage = () => {
  // const { SetNewDistributionDate } = useGlobalContext();
  return <input className="flex mx-auto" type="date" />;
};

export default SetNewDistributionDate;
