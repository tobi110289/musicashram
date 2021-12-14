import type { NextPage } from "next";
import { ListUser, AdminListUser, EditPencil } from "../components";
import { calculateShare, sortByFirstName, returnTotalTokens } from "../helpers";
import { useGlobalContext } from "../utility/context";
import { useState } from "react";

interface IUserList {
  admin: boolean;
}

const UserList: NextPage<IUserList> = ({ admin }) => {
  const { users, treasury, deleteAllTokens } = useGlobalContext();
  const [editable, setEditable] = useState(false);
  const totalTokens = returnTotalTokens(users);
  return (
    <div>
      {admin ? (
        <div className="flex">
          <EditPencil setter={setEditable} val={editable} />
          {editable && (
            <button
              onClick={() => {
                const result = confirm(
                  "Are you sure you want to reset all tokens of everyone?"
                );
                if (result) {
                  deleteAllTokens();
                }
              }}
              className="bg-darkred text-white-100 hover:bg-grey-800 w-56 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ⚠️ Delete All Tokens ⚠️
            </button>
          )}
        </div>
      ) : null}
      <table className="table-fixed w-screen">
        <thead>
          <tr>
            <th className="w-1/4 border">FIRST NAME</th>
            <th className="w-1/4 border">LAST NAME</th>
            <th className="w-1/5 border">TOKENS</th>
            <th className="w-1/5 border">SHARE</th>
            {editable ? <th className="w-1/6 border">DELETE?</th> : null}
          </tr>
        </thead>
        <tbody>
          {users.length
            ? sortByFirstName(users).map((user, index) => {
                const share = calculateShare(
                  treasury,
                  totalTokens,
                  user.tokens
                );
                const props = {
                  key: user.id,
                  user: user,
                  share: share,
                  even: index % 2 === 0,
                };
                return admin ? (
                  <AdminListUser {...props} editable={editable} />
                ) : (
                  <ListUser {...props} />
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
