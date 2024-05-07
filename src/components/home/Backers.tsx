import React from 'react';
import type { NextPage } from "next";
import Image from 'next/image';
import Speedy from '@/components/basic/Speedy';

import {
  Card,
} from "@/components/ui/card"

const Backers: NextPage = () => {
  return (
    // <div className="sm:h-[15vh] w-full container mx-auto py-12 px-4 md:px-24 flex flex-col items-center"> {/* Centering the entire container */}
    //   <div className="mt-4 gap-12 max-w-6xl flex flex-row justify-center ">
    //     <div className="flex p-4 justify-center items-center border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px]">
    //       <Image src="./Outlier_Ventures_Logo.svg" alt="Outlier Ventures Logo" width={250} height={100} />
    //     </div>
    //     <div className="flex p-4 justify-center items-center border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px]">
    //       <Image src="./Wormhole_Logo_Full.svg" alt="Wormhole Logo" width={220} height={100} />
    //     </div>
    //     <div className="flex p-4 justify-center items-center border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px]">
    //       <Image src="./Borderless_Logo.svg" alt="Borderless Logo" width={200} height={100} />
    //     </div>
    //   </div>
    //   <div className="flex -mt-16 p-4 justify-end items-center relative -mr-24 ml-auto"> 
    //     <Speedy/>
    //   </div>
    // </div>

    <div className="sm:h-[15vh] w-full container mx-auto py-12 px-4 md:px-24 flex flex-col items-center">
      <div className="mt-4 gap-12 max-w-6xl flex flex-col md:flex-row justify-center ">

        <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] py-10 md:p-4 flex justify-center items-center'>
          <Image src="./Outlier_Ventures_Logo.svg" alt="Outlier Ventures Logo" width={250} height={100} />
        </Card>

        <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] p-4 flex justify-center items-center'>
          <Image src="./Wormhole_Logo_Full.svg" alt="Wormhole Logo" width={250} height={100} />
        </Card>

        <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] py-6 md:p-4 flex justify-center items-center'>
          <Image src="./Borderless_Logo.svg" alt="Borderless Logo" width={250} height={100} />
        </Card>

      </div>

      <div className="flex -mt-16 p-4 justify-end items-center relative md:-mr-20 ml-auto">
        <Speedy />
      </div>
    </div>
  )
}

export default Backers;

