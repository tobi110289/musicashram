import type { NextPage } from "next";
import React, { useState } from "react";
import { useGlobalContext } from "../utility/context";

const Login: NextPage = () => {
  const { adminLogin } = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username && password) {
      const admin = { username, password };
      await adminLogin(admin);
    } else {
      alert("Please enter a valid username and password");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  z-10 w-screen mb-4 form-input mx-auto p-20 absolute"
    >
      <input
        className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        autoComplete="username"
      />
      <input
        className="shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-4"
        placeholder="Password"
        type="password"
        value={password}
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-black text-white-100 hover:bg-grey-800 font-bold w-full h-12 py-2 px-4  rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
    </form>
  );
};

export default Login;
