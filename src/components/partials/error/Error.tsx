"use client";
import { useAppContext } from "@/context/Context";
import React from "react";
import UseAnimations from "react-useanimations";
import AlertCircle from "react-useanimations/lib/alertCircle";

function Error() {
  const { error } = useAppContext();
  return (
    <div>
      <UseAnimations
        size={40}
        wrapperStyle={{ marginTop: "5px" }}
        animation={AlertCircle}
      />

      <p>{error || "Houve um erro interno"}</p>
    </div>
  );
}

export default Error;
