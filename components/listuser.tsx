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
      <th>{share} €</th>
    </tr>
  );
};

export default ListUser;
