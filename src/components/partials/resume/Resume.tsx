"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppContext } from "@/context/Context";

function Resume() {
  const { datas } = useAppContext();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center underline">
          {`Resume do Mês de ${datas.datas.resume.currentMonth}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="my-3 flex justify-between items-center">
          <p className="underline underline-offset-2 ">Saldo incial do mês:</p>
          <div
            className="flex h-[80px] w-[80px] bg-appBase shadow-md rounded-full items-center justify-center
          text-white"
          >
            <div className="text-center text-sm">
              <p className="font-semibold ">
                {datas.datas.resume.initialBalance.toFixed(2)}
              </p>
              <p>R$</p>
            </div>
          </div>
        </div>

        <div className="my-3 flex justify-between items-center">
          <p className="underline underline-offset-2 ">Saldo usado:</p>
          <div
            className="flex h-[80px] w-[80px] bg-appBase shadow-md rounded-full items-center justify-center
          text-white"
          >
            <div className="text-center text-sm">
              <p className="font-semibold ">
                {datas.datas.resume.totalUsed.toFixed(2)}
              </p>
              <p>R$</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Resume;
