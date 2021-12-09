import type { NextPage } from "next";
import { UserList, Treasury, Cashout, TotalTime } from "../components";
import { useGlobalContext } from "../utility/context";

const Overview: NextPage = () => {
  const { users } = useGlobalContext();

  return (
    <div className="flex flex-col">
      <Treasury />
      <Cashout />
      {users && users.length && (
        <>
          <UserList admin={false} />
          <TotalTime />
        </>
      )}
    </div>
  );
};

export default Overview;
