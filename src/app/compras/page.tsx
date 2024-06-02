"use client";
import { useAppContext } from "@/context/Context";
import PurchaseCard from "@/components/partials/PurchaseCard/PurchaseCard";
import React from "react";

function Page() {
  const { datas } = useAppContext();
  return (
    <div>
      {datas.datas.purchase.map((purchase, index) => (
        <PurchaseCard key={index} {...purchase} />
      ))}
    </div>
  );
}

export default Page;
