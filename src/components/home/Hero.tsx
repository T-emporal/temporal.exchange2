import type { NextPage } from "next";
import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { buttonVariants } from "@/components/ui/button"

import { MoveRight } from "lucide-react";
import Link from "next/link";
import TextSwitcher from "../basic/TextSwitcher";

const linesOfText = [
  "Yield",
  "Liquidity",
  "Derivatives",
];

const Hero: NextPage = () => {
  return (
    <div className="sm:h-[60vh] flex flex-col md:flex-row items-center justify-center">
      <div className="flex-1 flex-row items-center justify-center px-4 md:px-32 mt-10">
        <h2 className="text-wrap text-6xl leading-tight text-white md:mx-0 lg:text-7xl ">
          Defragmenting
          {/* <span className="hidden sm:block"></span> */}
          <TextSwitcher texts={linesOfText} interval={2000} />

        </h2>
        {/* <div className="text-gray-400 text-justify font-light text-xl mt-8 max-w-lg space-y-2">
          <p>Temporal brings unprecedented efficiencies to fixed-income and derivative markets with patent-pending infra</p>
          <p>• single pool for each asset, generating continuous, market-determined forward-curves</p>
          <p>• unifying maturity-fragmented liquidity and pricing instruments of any given duration</p>
          <p>• plug-and-play integration with TradFi and DeFi market venues</p>
        </div> */}
        <p className="text-gray-400 text-balance font-light text-xl mt-8 max-w-lg">
        Patent-pending market infrastructure bringing unprecedented efficiencies to fixed-income and derivatives. Natively for TradFi and DeFi market venues.
        </p>



        <Link href="/notify" className={buttonVariants({ variant: "cta" })}>Get Notified  <MoveRight className="h-5 w-5" /></Link>

      </div>
      <div className="flex-1 flex items-center justify-center relative h-full mt-10 md:mt-0">
        <div className="relative">
          <Image
            className="w-[250px] md:w-[400px] h-auto"
            src="/Herographic1.png"
            alt="Temporal Logo"
            width={400}
            height={400}
            sizes="(max-width: 768px) 250px, 400x"
            priority
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;
