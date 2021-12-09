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
      <form className="flex mx-auto">
        <div className="flex flex-col">
          <input
            type="string"
            required={true}
            className="text-2xl w-32 mb-2"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="string"
            className="text-2xl w-32"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          className="w-20 mx-2 flex items-center justify-center rounded-md bg-black text-white-100 text-2xl"
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
