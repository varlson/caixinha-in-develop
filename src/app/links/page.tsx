import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { links } from "@/constants/constatnts";

function Page() {
  return (
    <Accordion type="single" collapsible>
      {links.map((link) => (
        <AccordionItem key={link.desc} value={link.href}>
          <AccordionTrigger>{link.desc}</AccordionTrigger>
          <AccordionContent>
            <Link
              className="underline underline-offset-2 text-blue-600"
              href={link.href}
            >
              {link.label}
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Page;
