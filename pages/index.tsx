import type { NextPage } from "next";
import Overview from "./overview";

const Home: NextPage = () => {
  return (
    <div className="bg-orange h-screen w-screen">
      <Overview />
    </div>
  );
};

export default Home;
