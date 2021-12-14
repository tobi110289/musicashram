import type { NextPage } from "next";
import { IUser } from "../interfaces/user";
import { useGlobalContext } from "../utility/context";

interface IListUser {
  user: IUser;
  share: number;
  even: boolean;
  editable: boolean;
}

const AdminListUser: NextPage<IListUser> = ({
  user,
  share,
  even,
  editable,
}) => {
  const { updateUser, deleteUser } = useGlobalContext();

  function edit(sel: string, val: string | number) {
    let newUser = user;
    if (sel === "first" && typeof val === "string")
      newUser = { ...user, firstName: val };
    if (sel === "last" && typeof val === "string")
      newUser = { ...user, lastName: val };
    if (sel === "token" && typeof val === "number")
      newUser = { ...user, tokens: val };
    updateUser(newUser);
  }
  function reset(sel: string, event: React.FocusEvent<Element>) {
    if (sel === "first") event.target.innerHTML = user.firstName;
    if (sel === "last") event.target.innerHTML = user.lastName;
    if (sel === "token") event.target.innerHTML = user.tokens + "";
  }
  function nameProps(sel: string) {
    return {
      suppressContentEditableWarning: true,
      contentEditable: editable,
      onBlur: (event: React.FocusEvent<Element>) => {
        const value = event.target.innerHTML;
        if (value) edit(sel, value);
        else reset(sel, event);
      },
    };
  }

  return (
    <tr className={even ? "text-grey-900" : ""}>
      <th className="text-center" {...nameProps("first")}>
        {user.firstName}
      </th>
      <th className="text-center" {...nameProps("last")}>
        {user.lastName}
      </th>
      <th
        className="text-center"
        suppressContentEditableWarning={true}
        contentEditable={editable}
        onFocus={(e) => (e.target.innerHTML = "")}
        onBlur={(event) => {
          const value = +event.target.innerHTML;
          if (value) edit("token", value);
          else reset("token", event);
        }}
      >
        {user.tokens}
      </th>
      <th className="text-center">
        {user.tokens && user.tokens > 0 ? share : 0} €
      </th>
      {editable ? (
        <th
          className="text-center"
          onClick={() => {
            const result = confirm(
              `Are you sure you want to delete ${user.firstName}?`
            );
            if (result) {
              deleteUser(user.id);
            }
          }}
        >
          <button>❌</button>
        </th>
      ) : null}
    </tr>
  );
};

export default AdminListUser;
