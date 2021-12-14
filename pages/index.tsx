import type { NextPage } from "next";
import Overview from "./overview";

const Home: NextPage = () => {
  return (
    <div className="bg-img7 bg-cover bg-no-repeat bg-fixed bg-center min-h-screen w-screen">
      <Overview />
      <div className="bg-orange opacity-60 z-0 min-h-screen w-screen"></div>
    </div>
  );
};

export default Home;
