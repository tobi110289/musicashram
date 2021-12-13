import type { NextPage } from "next";
import { UserList, Treasury, Cashout, TotalTime } from "../components";
import { useGlobalContext } from "../utility/context";

const Overview: NextPage = () => {
  const { users } = useGlobalContext();

  return (
    <div className="flex flex-col z-10 absolute min-h-screen w-screen">
      <div className="my-7"></div>
      <Treasury />
      <Cashout />
      <div className="mb-6"></div>
      {users && users.length > 0 && (
        <>
          <UserList admin={false} />
          <TotalTime />
        </>
      )}
    </div>
  );
};

export default Overview;
