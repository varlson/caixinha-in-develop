"use client";
import { AllDatasType, AppWrapperType } from "@/types/types";
import React, { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext<AppWrapperType>({
  datas: { datas: { fines: [], purchase: [], monthStatus: [] } },
  setDatas: (datas: AllDatasType) => {},
  setErrorMsg: (errorMsg: string) => {},
  error: null,
});

export default function AppWrapper({ children }: { children: ReactNode }) {
  const [error, setError] = useState<string | null>(null);

  const setErrorMsg = (errorMsg: string) => {
    setError(error);
  };

  const [datas, setAllDatas] = useState<AllDatasType>({
    datas: { fines: [], purchase: [], monthStatus: [] },
  });
  const setDatas = (datas: AllDatasType) => {
    setAllDatas(datas);
  };

  return (
    <AppContext.Provider value={{ datas, setDatas, error, setErrorMsg }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
