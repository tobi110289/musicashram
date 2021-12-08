import type { NextPage } from "next";
import { ModifyTreasury } from "../components";
import { useGlobalContext } from "../utility/context";

const Dashboard: NextPage = () => {
  const { users, treasury, distributionDate } = useGlobalContext();

  return (
    <div className="bg-orange h-screen w-screen">
      <ModifyTreasury />
    </div>
  );
};

export default Dashboard;

//treasury edit
//date edit
//add user
//modify user
