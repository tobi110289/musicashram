import type { NextPage } from "next";
import { useGlobalContext } from "../utility/context";
import React, { useState } from "react";

const CreateUser: NextPage = () => {
  const { createUser } = useGlobalContext();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (firstName.length > 1 && lastName.length > 0) {
      createUser({ firstName, lastName });
      setFirstName("");
      setLastName("");
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <form className="flex flex-col mx-auto">
        <input
          type="string"
          required={true}
          className="shadow appearance-none border rounded w-48 mb-2 h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline text-2xl"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="string"
          className="shadow appearance-none border rounded w-48 h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline text-2xl mb-2"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          className="w-20 mb-2 mx-auto h-12 py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-black text-white-100 hover:bg-grey-800 text-base"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
      {error && (
        <p className="mx-auto text-red-900">
          Please enter a first and last name!
        </p>
      )}
    </>
  );
};

export default CreateUser;
