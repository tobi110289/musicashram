import type { NextPage } from "next";
import {
  ModifyTreasury,
  Treasury,
  CreateUser,
  SetNewDistributionDate,
  Cashout,
} from "../components";

const Dashboard: NextPage = () => {
  return (
    <div className="bg-orange h-screen w-screen flex flex-col">
      <Treasury />
      <ModifyTreasury />
      <p className="mx-auto my-2">________________________</p>
      <Cashout />
      <SetNewDistributionDate />
      <p className="mx-auto my-1">________________________</p>
      <CreateUser />
    </div>
  );
};

export default Dashboard;
