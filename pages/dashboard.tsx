import type { NextPage } from "next";
import {
  ModifyTreasury,
  Treasury,
  CreateUser,
  SetNewDistributionDate,
  Cashout,
  UserList,
} from "../components";
import { useGlobalContext } from "../utility/context";

const Dashboard: NextPage = () => {
  const { users } = useGlobalContext();

  return (
    <div className="bg-orange min-h-screen w-screen flex flex-col">
      <Treasury />
      <ModifyTreasury />
      <p className="mx-auto my-2">________________________</p>
      <Cashout />
      <SetNewDistributionDate />
      <p className="mx-auto mb-4">________________________</p>
      <CreateUser />
      {users && users.length && <UserList admin={true} />}
    </div>
  );
};

export default Dashboard;
