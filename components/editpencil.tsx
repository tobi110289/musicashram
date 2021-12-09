import type { NextPage } from "next";
import { TiPencil, TiTickOutline } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";

interface IEditPencil {
  setter: Dispatch<SetStateAction<boolean>>;
  val: boolean;
}

const EditPencil: NextPage<IEditPencil> = ({ setter, val }) => {
  return val ? (
    <TiTickOutline className="flex m-auto text-6xl my-4" onClick={() => setter(!val)} />
  ) : (
    <TiPencil className="flex m-auto text-6xl my-4" onClick={() => setter(!val)} />
  );
};

export default EditPencil;
