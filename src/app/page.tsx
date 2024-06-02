"use client";
import { useAppContext } from "@/context/Context";
import { useEffect } from "react";
export default function Home() {
  const { datas } = useAppContext();

  // useEffect(() => {
  //   if (datas.datas.fines.length) {
  //   }
  // }, [datas]);

  return (
    <div>
      <p className="bg-blue-400">Hello world</p>
      <p>{datas.datas.purchase[0].author}</p>
    </div>
  );
}
