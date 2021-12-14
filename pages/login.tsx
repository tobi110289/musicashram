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
      className="flex flex-col  z-10 w-screen mb-4 p-20 max-w-md form-input absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <input
        className="bg-yellow border-darkred shadow appearance-none border rounded w-full h-12 py-2 px-3 text-darkred placeholder-orange leading-tight focus:outline-none focus:shadow-outline mb-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        autoComplete="username"
      />
      <input
        className="border-darkred bg-yellow placeholder-orange shadow appearance-none border rounded w-full h-12 py-2 px-3 text-grey-600 leading-tight focus:outline-none focus:shadow-outline mb-4"
        placeholder="Password"
        type="password"
        value={password}
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-darkred text-white-100 hover:bg-grey-800 font-bold w-full h-12 py-2 px-4  rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
    </form>
  );
};

export default Login;
