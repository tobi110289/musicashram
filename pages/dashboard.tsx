import type { NextPage } from "next";
import { ModifyTreasury, Treasury, CreateUser, SetNewDistributionDate } from "../components";
import { useGlobalContext } from "../utility/context";

const Dashboard: NextPage = () => {
  const { users, treasury, distributionDate } = useGlobalContext();

  return (
    <div className="bg-orange h-screen w-screen flex flex-col">
      <Treasury />
      <ModifyTreasury />
      <p className="mx-auto my-2">________________________</p>
      <CreateUser />
      <p className="mx-auto my-1">________________________</p>
      <SetNewDistributionDate />
    </div>
  );
};

export default Dashboard;

//treasury edit
//date edit
//add user
//modify user
