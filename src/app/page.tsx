"use client";
import FineCardsUI from "@/components/partials/fineCards/fineCards";
import { damyfines } from "@/constants/constatnts";
import { useAppContext } from "@/context/Context";
import { useEffect } from "react";
export default function Home() {
  const { datas } = useAppContext();
  return (
    <div>
      <p className="bg-blue-400">Hello world</p>
      <div className="md:w-[300px] p-2">
        {damyfines.map((fine, index) => (
          <FineCardsUI key={index} {...fine} />
        ))}
      </div>
    </div>
  );
}
