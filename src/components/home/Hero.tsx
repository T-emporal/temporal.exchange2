import type { NextPage } from "next";
import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { buttonVariants } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation';

import { MoveRight } from "lucide-react";
import Link from "next/link";
import TextSwitcher from "../basic/TextSwitcher";

const linesOfText = [
  "Derivatives",
  "Liquidity",
  "Yield",
];

const Hero: NextPage = () => {
  return (
    <div className="sm:h-[60vh] flex flex-col items-center justify-center">
      <div className="mx-auto flex flex-col md:max-w-[70vw] md:flex-row">
        <div className="md:text-center text-left">

          <div className="flex items-center justify-center min-w-[50vw]">
            <h2 className=" text-6xl items-center text-white md:mx-0 lg:text-7xl">
              <TextSwitcher texts={linesOfText} staticText="Defragmenting" interval={2000} />
            </h2>
          </div>

          {/* TYPE ANIMATION */}
          {/* <h2 className=" text-6xl mx-6 lg:text-7xl text-center items-center hidden md:block">
            <span style={{}}>Defragmenting </span>

            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                ' Yield',
                1000,
                ' Liquidity',
                1000,
                ' Derivatives',
                500,
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ color: '#0ABAB5', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h2>
          <h2 className=" text-6xl mx-6 lg:text-7xl text-center items-center block md:hidden ">
            <span style={{}}>Defragmenting </span>

            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                'Yield',
                1000,
                'Liquidity',
                1000,
                'Derivatives',
                500,
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              style={{ whiteSpace: 'pre-line', color: '#0ABAB5', display: 'block' }}
              repeat={Infinity}
            />
          </h2> */}

          <p
            className="mx-6 text-gray-400 font-light text-4xl mt-16 text-left md:text-center "
          >
            Patent-pending market infrastructure bringing unprecedented efficiencies to fixed-income and derivatives. Integrates with TradFi and DeFi market venues.
          </p>
        </div>


      </div>
      <div className="mt-10 flex items-center justify-center md:flex-row md:space-x-4">
        <Link href="/notify" className={buttonVariants({ variant: "cta" })}>Get Notified </Link>
      </div>
    </div>

  );
};

export default Hero;
