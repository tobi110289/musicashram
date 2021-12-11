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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
