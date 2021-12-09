import type { NextPage } from "next";
import Overview from "./overview";

const Home: NextPage = () => {
  return (
    <div className="bg-orange min-h-screen w-screen">
        <Overview />
    </div>
  );
};

export default Home;
