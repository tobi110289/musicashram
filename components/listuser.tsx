import type { NextPage } from "next";
import { IUser } from "../interfaces/user";

interface IListUser {
  user: IUser;
  share: number;
  even: boolean;
}

const ListUser: NextPage<IListUser> = ({ user, share, even }) => {
  return (
    <tr className={even ? "text-grey-800" : "" + ""}>
      <th>{user.firstName}</th>
      <th>{user.lastName}</th>
      <th>{user.tokens}</th>
      <th>{user.tokens && user.tokens > 0 ? share : 0} €</th>
    </tr>
  );
};

export default ListUser;
