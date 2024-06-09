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
import { Fines } from "@/types/types";

function FineCardsUI({ desc, resident_name, date, status }: Fines) {
  return (
    <Card className="my-1">
      <CardHeader>
        <CardTitle className="text-center">{resident_name}</CardTitle>
        <CardDescription>{desc || "aaa"}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-thin">{date}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-x-2 justify-center items-center">
          <p className="font-semibold">Situação:</p>
          <p>{status ? "Paga" : "Devendo"}</p>
          <div
            className={`w-3 h-3 ${
              status ? "bg-emerald-600" : "bg-red-500"
            } rounded-full`}
          ></div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default FineCardsUI;
