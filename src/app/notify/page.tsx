
import React from 'react';
import { ArrowLeftCircleIcon, ArrowPathIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from "@/components/home/NavBar";

import Speedy from '@/components/basic/Speedy';
import RootLayout from '../layout';
import NotifyForm from '@/components/notify/notify_form';
import { chakraPetch } from '@/lib/font';
import { BellIcon } from "@heroicons/react/24/outline";


const Waitlist: NextPage = () => {

    return (
        <>
            <RootLayout>
                <div className='md:h-screen'
                    style={{
                        backgroundImage: `url('/Noise-BG.svg')`,
                        backgroundSize: 'cover',
                        backgroundAttachment: "fixed",
                    }}>

                    <Navbar></Navbar>

                    <main className="flex md:mt-16 flex-col items-center justify-center mb-5 xl:mb-20">

                        <div className={`flex  items-center text-center text-3xl md:text-4xl leading-[70px] mt-6 text-coffee ${chakraPetch.className}`}>
                            GET <span className="text-temporal ml-4"> NOTIFIED</span>
                            <BellIcon className="ml-4 h-7 w-7 md:h-10 md:w-10 text-temporal" />

                        </div>

                        <div className="text-center text-xl md:leading-[70px] mt-4 text-coffee">
                            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
                                <div>
                                    <span className="text-temporal "> 1: </span> Leave your handle
                                </div>
                                <div>
                                    <span className="text-temporal "> 2: </span> Play some Temptris
                                </div>
                                <div>
                                    <span className="text-temporal">3:</span> We&apos;ll reach out to you
                                </div>
                            </div>
                        </div>

                        <NotifyForm></NotifyForm>

                        <Link className="mt-16 text-coffee text-lg flex items-center hover:text-temporal" href={"/"}>
                            <ArrowLeftCircleIcon className="mr-2 h-10 w-10" />
                            Go back to homepage
                        </Link>
                    </main>

                    {/* <div className="container mx-auto space-y-6 divide-y divide-[#0ABAB5CC] px-6 pb-8 md:space-y-12 md:fixed md:inset-x-0 md:bottom-0">

                        <div className="grid justify-center pt-6 lg:justify-between">
                            <div className="flex flex-col text-[#f9fafb] self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                                <span>©2023 Temporal All rights reserved</span>
                            </div>
                            <div className="flex justify-center space-x-4 pt-8 md:pt-4 lg:col-end-13 lg:pt-0">
                                <Speedy />
                            </div>
                        </div>
                    </div> */}
                </div>
            </RootLayout>

        </>
    );
};

export default Waitlist;
