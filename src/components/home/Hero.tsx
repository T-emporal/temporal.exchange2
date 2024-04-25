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
    <div className="sm:h-[60vh] flex flex-col items-center justify-center">
      <div className="mx-auto flex flex-col max-w-[70vw] md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="flex-col md:flex md:flex-row text-6xl text-white md:mx-0 lg:text-7xl">
            <div className="md:ml-20">Defragmenting</div>
            <div className="ml-4 -mt-3">
              <TextSwitcher texts={linesOfText} interval={2000} />
            </div>
          </h2>
          <p
            className="mx-4 text-gray-400 font-light text-4xl mt-16 text-left md:text-center "
          >
            Patent-pending market infrastructure bringing unprecedented efficiencies to fixed-income and derivatives. Natively for TradFi and DeFi market venues.
          </p>
        </div>

        
      </div>
      <div className="mt-10 flex items-center justify-center md:flex-row md:space-x-4">
          <Link href="/notify" className={buttonVariants({ variant: "cta" }) }>Get Notified </Link>
        </div>
    </div>

  );
};

export default Hero;
