import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Month from "../month/Month";

function TabsUI() {
  return (
    <div className="">
      <Tabs defaultValue="account" className=" w-full">
        <TabsList className="shadow-md w-full flex gap-x-10">
          <TabsTrigger value="account">1º Semestre</TabsTrigger>
          <TabsTrigger value="password">2º Semestre</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Month semester={1} />
        </TabsContent>
        <TabsContent value="password">
          <Month semester={2} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsUI;
