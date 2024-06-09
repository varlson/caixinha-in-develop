"use client";

import { useAppContext } from "@/context/Context";
import { FetchAllDatas } from "@/services/fetchAllDatas";
import { AllDatasType } from "@/types/types";
import React, { ReactNode, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Spinner from "@/components/ui/spinner/Spinner";
import Error from "../error/Error";

function MainLayout({ children }: { children: ReactNode }) {
  const { setDatas, datas, setErrorMsg, error } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

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
        console.log("Erro no fetch");
        console.log(resp.error);
      }
    };

    if (!datas.datas.monthStatus.length) {
      fetchDatas();
      setTimeout(() => {
        if (!datas.datas.monthStatus.length) {
          setIsLoading(false);
          setErrorMsg("Servidor nao está respondendo");
        }
      }, 15000);
    } else {
      setIsLoading(false);
    }
  }, [setDatas, datas.datas.monthStatus.length, setErrorMsg]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  if (error) {
    <div className="flex items-center justify-center h-screen">
      <Error />;
    </div>;
  }
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
