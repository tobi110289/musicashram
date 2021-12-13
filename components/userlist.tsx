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
        <div className="flex flex-col">
          <EditPencil setter={setEditable} val={editable} />
          {editable && (
            <button
              onClick={() => {
                const result = confirm(
                  "Are you sure you want to reset all tokens?"
                );
                if (result) {
                  deleteAllTokens();
                }
              }}
              className="bg-black text-white-100 hover:bg-grey-800 font-bold w-48 h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ⚠️ Delete All Tokens ⚠️
            </button>
          )}
        </div>
      ) : null}
      <table className="table-fixed w-screen">
        <thead>
          <tr>
            <th className="w-1/4 border">Firstname</th>
            <th className="w-1/4 border">Lastname</th>
            <th className="w-1/6 border">Tokens</th>
            <th className="w-1/4 border">Share</th>
            {editable ? <th className="w-1/6 border">Delete?</th> : null}
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
