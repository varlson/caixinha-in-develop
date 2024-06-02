import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { damymonths } from "@/constants/constatnts";
import Status from "@/components/ui/status/Status";

function TableUI({ semester }: { semester: number }) {
  const [start, end] = semester == 1 ? [0, 6] : [6, 12];
  return (
    <div className="grid grid-cols-12 mt-2">
      <div className="col-span-4 text-center ">
        {damymonths.map((morador, index) => (
          <p className="border p-1" key={index}>
            {morador.resident_name}
          </p>
        ))}
      </div>
      <div className="col-span-8 text-center ">
        {damymonths.map((userMonth, userInedx) => (
          <div
            key={userInedx}
            className="grid grid-cols-6 justify-items-center"
          >
            {userMonth.months.slice(start, end).map((month, index) => (
              <div
                className="border border-slate-300 w-full flex flex-col items-center p-1"
                key={index}
              >
                <Status
                  status={month}
                  index={semester == 1 ? index : index + 6}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableUI;
