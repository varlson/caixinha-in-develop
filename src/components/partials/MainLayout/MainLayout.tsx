"use client";

import { useAppContext } from "@/context/Context";
import { FetchAllDatas } from "@/services/fetchAllDatas";
import { AllDatasType } from "@/types/types";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function MainLayout({ children }: { children: ReactNode }) {
  const { setDatas, datas, setErrorMsg } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      const resp = await FetchAllDatas();

      if (resp.status) {
        const respDatas: AllDatasType = {
          datas: {
            fines: resp.datas.data.fines,
            purchase: resp.datas.data.purchase,
            monthStatus: resp.datas.data.monthStatus,
            resume: resp.datas.data.resume,
          },
        };

        setDatas(respDatas);
        setIsLoading(false);
      } else {
        setErrorMsg(resp.error || "Houve um erro interno");
      }
    };
  }, [setDatas, datas.datas.monthStatus.length, setErrorMsg]);

  if (isLoading) return <p>Is loading ...</p>;
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="bg-appLigth overflow-scroll h-[calc(100vh-160px)] p-2">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
