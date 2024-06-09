import Link from "next/link";
import React from "react";
import { BiPurchaseTag } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { PiUsersThreeThin } from "react-icons/pi";

function Footer() {
  return (
    <div className=" h-[50px] text-appDark bg-appLigth">
      <div className="px-4 py-2 flex justify-between h-full items-end">
        <Link href="/">
          <LiaHomeSolid className="text-4xl" />
        </Link>
        <Link href="/mes">
          <PiUsersThreeThin className="text-4xl" />
        </Link>

        <Link href="/compras">
          <BiPurchaseTag className="text-4xl" />
        </Link>

        <Link href="/multas">
          <IoTicketOutline className="text-4xl" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
