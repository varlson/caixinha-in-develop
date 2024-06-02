"use client";
import FineCardsUI from "@/components/partials/fineCards/fineCards";
import { damyfines } from "@/constants/constatnts";
import { useAppContext } from "@/context/Context";
import React from "react";
function Page() {
  const { datas } = useAppContext();
  return (
    <div>
      <div className="md:w-[300px] p-2">
        {datas.datas.fines.map((fine, index) => (
          <FineCardsUI key={index} {...fine} />
        ))}
      </div>
    </div>
  );
}

export default Page;
