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
import Link from "next/link";
import { PurchaseType } from "@/types/types";

function PurchaseCard({ value, date, desc, link, author }: PurchaseType) {
  return (
    <Card className="my-2 md:w-[400px]">
      <CardHeader>
        <CardTitle className="flex justify-center">
          <div className="flex justify-center items-center shadow-md h-[80px] w-[80px] rounded-full bg-appLigth">
            <div className="text-sm text-center flex flex-col">
              <p className="">{value}</p>
              <p>RS</p>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex gap-x-2 text-justify">
          {`Data: ${date}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p> {desc}</p>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex gap-x-2">
          <p>Compra feito por:</p>
          <p className="underline px-2 font-semibold">{author}</p>
        </div>
        <Link className="w-full" href={link} target="blank">
          <div className="hover:underline p-2 mt-5 text-center rounded-md bg-appBase  text-white ">
            Ver comprovante
          </div>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PurchaseCard;
