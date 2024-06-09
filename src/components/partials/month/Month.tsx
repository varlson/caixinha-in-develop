import React from "react";
import TableUI from "../table/Table";
import { mesesDoAno } from "@/constants/constatnts";

function Month({ semester }: { semester: number }) {
  const [start, end] = semester == 1 ? [0, 6] : [6, 12];
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 text-center border-b border-slate-400">
        Moradores
      </div>
      <div className="col-span-8 text-center border-b border-slate-400">
        <div className="grid grid-cols-6">
          {mesesDoAno.slice(start, end).map((mes, index) => (
            <p className="border" key={index}>
              {mes.slice(0, 3)}
            </p>
          ))}
        </div>
      </div>

      <div className="col-span-12">
        <TableUI semester={semester} />
      </div>
    </div>
  );
}

export default Month;
