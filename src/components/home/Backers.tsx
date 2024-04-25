import React from 'react';
import type { NextPage } from "next";
import Image from 'next/image';
import Speedy from '@/components/basic/Speedy';

const Backers: NextPage = () => {

    return (

        <div className="sm:h-[15vh] bg-black w-full container mx-auto py-12 px-4 md:px-24 ">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4 ">

                <div className="flex p-4 justify-center items-center ">
                    <span className="text-xl">Backed By</span>
                </div>
                <div className="flex p-4 justify-center items-center border-b-2 border-temporal">
                    <Image src="./Outlier_Ventures_Logo.svg" alt="Outlier Ventures Logo" width={250} height={100} />
                </div>
                <div className="flex p-4 justify-center items-center border-b-2 border-temporal">
                    <Image src="./Wormhole_Logo_Full.svg" alt="Wormhole Logo" width={220} height={100} />
                </div>
                <div className="flex p-4 justify-center items-center border-b-2 border-temporal">
                    <Image src="./Borderless_Logo.svg" alt="Borderless Logo" width={200} height={100} />
                </div>
                <div className="flex p-4 justify-end items-center relative">
                    <Speedy></Speedy>
                </div>


            </div>
        </div>

    )
}

export default Backers;