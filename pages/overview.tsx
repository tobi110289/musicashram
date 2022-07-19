import type { NextPage } from "next";
import Image from "next/image";
import { UserList, Treasury, Cashout, TotalTime, Documentation } from "../components";
import { useGlobalContext } from "../utility/context";
import Loader from "react-loader-spinner";

const Overview: NextPage = () => {
  const { users } = useGlobalContext();

  return (
    <div className="flex flex-col z-10 absolute w-screen h-screen overflow-scroll appearance-none">
      <div>
        <Image
          alt="Music Ashram Logo"
          priority
          src="/Logo.png"
          width={1280}
          height={720}
          layout="responsive"
        />
      </div>
      <Treasury />
      <Cashout />

      <div className="mb-6"></div>
      {users && users.length > 0 ? (
        <>
          <UserList admin={false} />
          <TotalTime />
          <Documentation />
        </>
      ) : (
        <div className="mx-auto">
          <Loader type="Rings" color="#661d15" height={100} width={100} />
        </div>
      )}
    </div>
  );
};

export default Overview;
