import type { NextPage } from "next";
import Overview from "./overview";
import { useGlobalContext } from "../utility/context";

const Home: NextPage = () => {
  const { bg } = useGlobalContext();

  return (
    <div
      className="bg-img2 bg-cover bg-no-repeat bg-center min-h-screen w-screen"
    >
    {/* <div
      className={`${bg} bg-cover bg-no-repeat bg-center min-h-screen w-screen`}
    > */}
      <Overview />
      <div className="bg-orange opacity-50 z-0 min-h-screen w-screen"></div>
    </div>
  );
};

export default Home;
