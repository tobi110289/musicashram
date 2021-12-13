import type { NextPage } from "next";
import { TiPencil, TiTickOutline } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";

interface IEditPencil {
  setter: Dispatch<SetStateAction<boolean>>;
  val: boolean;
}

const EditPencil: NextPage<IEditPencil> = ({ setter, val }) => {
  return (
    <button
      onClick={() => setter(!val)}
      className="bg-black text-white-100 hover:bg-grey-800 font-bold w-24 h-12 py-2 px-4 rounded focus:outline-none flex mx-2 mb-2 focus:shadow-outline justify-center"
    >
      {val ? (
        <>
          <TiTickOutline className="text-2xl self-center" />
          <p className="self-center">Done</p>
        </>
      ) : (
        <>
          <TiPencil className="text-2xl self-center" />
          <p className="self-center mx-1">Edit</p>
        </>
      )}
    </button>
  );
};

export default EditPencil;
