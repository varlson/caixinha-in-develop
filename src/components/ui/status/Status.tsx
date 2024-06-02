import { mesesDoAno } from "@/constants/constatnts";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import {
  MdOutlineRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";
import { PiWarningCircleThin } from "react-icons/pi";

function Status({
  status,
  index,
}: {
  status: boolean | string;
  index: number;
}) {
  const currentMonth = mesesDoAno[index];
  const passedMonth = mesesDoAno.slice(0, new Date().getMonth() + 1);

  if (!passedMonth.includes(currentMonth)) {
    return (
      <MdOutlineRadioButtonUnchecked className="text-center text-2xl bg-slate-300 w-full p-1" />
    );
  }

  if (typeof status == "string") {
    return <MdRadioButtonChecked className="text-center text-2xl" />;
  }

  return status ? (
    <CiCircleCheck className="text-emerald-400 text-2xl text-center" />
  ) : (
    <PiWarningCircleThin className="text-2xl text-yellow-500 text-center" />
  );
}

export default Status;
