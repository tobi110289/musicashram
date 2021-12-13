import type { NextPage } from "next";
import React, { useState } from "react";
import { createAdmin } from "../services/admin.service";
import { useRouter } from "next/router";

const CreateAdmin: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [passwordonce, setPasswordonce] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username && passwordonce && password && passwordonce === password) {
      const admin = { username, password };
      await createAdmin(admin);
      router.push("/login");
    } else {
      alert(
        "Please enter a username and make sure you write the same password twice"
      );
    }
  }

  return (
    <div
      className="bg-img5 bg-cover bg-no-repeat bg-center min-h-screen w-screen"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-md form-input absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 min-h-screen p-20 w-screen"
      >
        <input
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-2"
          placeholder="Password"
          type="password"
          value={passwordonce}
          onChange={(e) => setPasswordonce(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-4"
          placeholder="Re-Type Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white-100 hover:bg-grey-800 font-bold w-full h-12 py-2 px-4  rounded focus:outline-none focus:shadow-outline">
          Create
        </button>
      </form>
      <div className="bg-orange opacity-50 z-0 min-h-screen w-screen"></div>
    </div>
  );
};

export default CreateAdmin;
