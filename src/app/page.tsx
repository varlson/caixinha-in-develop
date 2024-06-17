"use client";
import PurchaseCard from "@/components/partials/PurchaseCard/PurchaseCard";
import Resume from "@/components/partials/resume/Resume";
import { useAppContext } from "@/context/Context";
export default function Home() {
  const { datas } = useAppContext();
  return (
    <div>
      <Resume />
      <div className="my-2 p-2">
        <p className="font-semibold text-xl">Últimas Despesas</p>
      </div>
      <div className="shadow-md mt-4">
        {datas.datas.purchase.slice(0, 2).map((purchase, index) => (
          <PurchaseCard key={index} {...purchase} />
        ))}
      </div>
    </div>
  );
}
