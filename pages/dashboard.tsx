import type { NextPage } from "next";
import {
  ModifyTreasury,
  Treasury,
  CreateUser,
  SetNewDistributionDate,
  Cashout,
  UserList,
} from "../components";

const Dashboard: NextPage = () => {
  return (
    <div className="bg-orange min-h-screen w-screen flex flex-col">
      <Treasury />
      <ModifyTreasury />
      <p className="mx-auto my-2">________________________</p>
      <Cashout />
      <SetNewDistributionDate />
      <p className="mx-auto mb-4">________________________</p>
      <CreateUser />
      <UserList admin={true} />
    </div>
  );
};

export default Dashboard;
