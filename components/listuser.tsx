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
      <td className="text-center">{user.firstName}</td>
      <td className="text-center">{user.lastName}</td>
      <td className="text-center">{user.tokens}</td>
      <td className="text-center">{user.tokens && user.tokens > 0 ? share : 0} €</td>
    </tr>
  );
};

export default ListUser;
