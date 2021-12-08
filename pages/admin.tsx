import type { NextPage } from "next";
import Dashboard from "./dashboard";

const Admin: NextPage = () => {
  return (
    <div className="bg-orange h-screen w-screen">
      <Dashboard />
    </div>
  );
};

export default Admin;
