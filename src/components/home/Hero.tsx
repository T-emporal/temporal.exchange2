import type { NextPage } from "next";
import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { buttonVariants } from "@/components/ui/button"

import { MoveRight } from "lucide-react";
import Link from "next/link";
import TextSwitcher from "../basic/TextSwitcher";

const linesOfText = [
  "Yield Markets",
  "Liquidity",
  "Derivatives",
];

const Hero: NextPage = () => {
  return (
    <div className="sm:h-[60vh] flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 flex-row items-center justify-center px-4 md:px-32 mt-10">
        <h2 className="text-wrap text-6xl leading-tight text-white md:mx-0 lg:text-7xl ">
          Defragmenting
          <span className="hidden sm:block"></span>
          <TextSwitcher texts={linesOfText} interval={2000} />

        </h2>
        <p
          className="text-gray-400 text-balance font-light text-xl mt-12 max-w-lg"
        >
          Temporal provides a shared omnichain vAMM. The novel design generates a continuous
          market-determined yield curve for dApps to optimize their own yield applications.
        </p>

        <Link href="/waitlist" className={buttonVariants({ variant: "cta" })}>Join Waitlist  <MoveRight className="h-5 w-5" /></Link>

      </div>
      <div className="flex-1 flex items-center justify-center relative h-full">
        <div className="max-w-[400px] max-h-[400px] w-full h-full relative">
          <Image
            src="/Herographic1.png"
            alt="Temporal Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;
