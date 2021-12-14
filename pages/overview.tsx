import type { NextPage } from "next";
import Image from "next/image";
import { UserList, Treasury, Cashout, TotalTime } from "../components";
import { useGlobalContext } from "../utility/context";

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
      {users && users.length > 0 && (
        <>
          <UserList admin={false} />
          <TotalTime />
        </>
      )}
    </div>
  );
};

export default Overview;
