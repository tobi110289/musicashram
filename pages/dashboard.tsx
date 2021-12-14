import type { NextPage } from "next";
import {
  ModifyTreasury,
  Treasury,
  CreateUser,
  SetNewDistributionDate,
  Cashout,
  UserList,
  Header,
} from "../components";
import { useGlobalContext } from "../utility/context";
import Loader from "react-loader-spinner";


const Dashboard: NextPage = () => {
  const { users } = useGlobalContext();

  return (
    <div className="overflow-scroll appearance-none h-screen w-screen flex flex-col absolute z-10">
      <Header />
      <Treasury />
      <ModifyTreasury />
      <p className="mx-auto my-2">____________________________</p>
      <Cashout />
      <SetNewDistributionDate />
      <p className="mx-auto mb-4">____________________________</p>
      <CreateUser />
      {users && users.length ? <UserList admin={true} />: <div className="mx-auto">
          <Loader type="Rings" color="#661d15" height={100} width={100} />
        </div>}
    </div>
  );
};

export default Dashboard;
