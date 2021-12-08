import type { NextPage } from "next";
import { UserList, Treasury, Cashout } from "../components";
import ApiService from "../services/user.service";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/user";

const Overview: NextPage = () => {
  const placeholderTreasury = 43995;
  const placeholderDate = "2022-06-01";
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const users = await ApiService.getAllUsers();
      setUsers(users);
    })();
  }, []);

  return (
    <div className="flex flex-col">
      <Treasury total={placeholderTreasury} />
      <Cashout cashoutDate={placeholderDate} />
      {users && users.length && (
        <UserList users={users} treasury={placeholderTreasury} />
      )}
    </div>
  );
};

export default Overview;
