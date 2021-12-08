import type { NextPage } from "next";
import { IUser } from "../interfaces/user";
import ListUser from "./listuser";
import { calculateShare, sortByFirstName, returnTotalTokens } from "../helpers";

interface IUserList {
  users: IUser[];
  treasury: number;
}

const UserList: NextPage<IUserList> = ({ users, treasury }) => {
  const totalTokens = returnTotalTokens(users);
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/4 border">Firstname</th>
          <th className="w-1/4 border">Lastname</th>
          <th className="w-1/4 border">Tokens</th>
          <th className="w-1/4 border">Share</th>
        </tr>
      </thead>
      <tbody>
        {users.length &&
          sortByFirstName(users).map((user, index) => {
            const share = calculateShare(treasury, totalTokens, user.tokens);
            return (
              <ListUser
                key={user.id}
                user={user}
                share={share}
                even={index % 2 === 0}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default UserList;
