import type { NextPage } from "next";
import { UserList, Treasury, Cashout } from "../components";
import { mockUsers as users } from "../__mocks__/mockUsers";

const Overview: NextPage = () => {
  const placeholderTreasury = 43995;
  const placeholderDate = "2022-06-01";
  return (
    <div className="flex flex-col">
      <Treasury total={placeholderTreasury} />
      <Cashout cashoutDate={placeholderDate} />
      <UserList users={users} treasury={placeholderTreasury} />
    </div>
  );
};

export default Overview;
