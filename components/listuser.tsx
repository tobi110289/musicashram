import type { NextPage } from "next";
import { IUser } from "../interfaces/user";

interface IListUser {
  user: IUser;
  share: number;
  even: boolean;
}

const ListUser: NextPage<IListUser> = ({ user, share, even }) => {
  return (
    <tr className={even ? "text-grey-900" : "" + ""}>
      <th className="text-center">{user.firstName}</th>
      <th className="text-center">{user.lastName}</th>
      <th className="text-center">{user.tokens}</th>
      <th className="text-center">{user.tokens && user.tokens > 0 ? share : 0} €</th>
    </tr>
  );
};

export default ListUser;
