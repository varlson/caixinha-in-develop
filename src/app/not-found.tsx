"use client";
import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";

function NotFound() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <p>Página não encontrada</p>
        <UseAnimations animation={alertTriangle} size={56} />
        <Link
          href="/"
          className="flex bg-appBase gap-x-2 justify-center items-center px-2 py-1 rounded  text-white "
        >
          <p>Voltar</p>
          <BiHome className="text-xl" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
