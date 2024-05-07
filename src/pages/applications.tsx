import React from 'react';
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "@/components/basic/Layout";
import Navbar from "@/components/home/NavBar";
import Speedy from '@/components/basic/Speedy';


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const Learn: NextPage = () => {

    return (
        <>
            <NextSeo title="Applications for Temporal" />
            <Layout>
                {/* <div className='md:h-screen'> */}

                    <Navbar></Navbar>

                    <div className="sm:h-[70vh] flex flex-col items-center justify-center mt-8">
                        <div className="mx-auto flex flex-col md:max-w-[70vw] md:flex-row">
                            <div className="md:text-center text-left">

                                <div className="flex items-center justify-center min-w-[50vw]">
                                    <h2 className=" text-6xl items-center text-white md:mx-0 lg:text-7xl">
                                        YIELD TRADING
                                    </h2>
                                </div>

                                <p className="mx-6 text-gray-400 font-light text-2xl mt-8 text-center ">
                                    Empower your users with an unparalleled experience in trading yield
                                </p>
                            </div>
                        </div>

                        <div className="w-full container mx-auto py-12 px-4 md:px-24 flex flex-col items-center">
                            <div className="mt-10 gap-12 max-w-6xl flex flex-col md:flex-row justify-center items-stretch">

                                <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] w-full md:w-1/3 py-8'>
                                    <CardHeader>
                                        <CardTitle className='text-lg font-semibold tracking-widest text-center'>MAXIMIZED CAPITAL  <span className="hidden m-0 p-0 sm:block"></span> EFFICIENCY</CardTitle>
                                    </CardHeader>
                                    <CardContent className="mt-4 text-center">
                                        <p>Experience the power of unified liquidity. A single pool for each asset for all maturity levels.</p>
                                    </CardContent>
                                </Card>

                                <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] w-full md:w-1/3 py-8'>
                                    <CardHeader>
                                        <CardTitle className='text-lg font-semibold tracking-widest text-center'>NO MATURITY  <span className="hidden m-0 p-0 sm:block"></span> LIMITS</CardTitle>
                                    </CardHeader>
                                    <CardContent className="mt-4 text-center">
                                        <p>Trade yields of any duration daily. Without fragmentation or waiting for maturity additions.</p>
                                    </CardContent>
                                </Card>

                                <Card className='rounded-none border-0 border-b-2 border-temporal bg-gray-800/20 backdrop-blur-[4px] w-full md:w-1/3 py-8'>
                                    <CardHeader>
                                        <CardTitle className='text-lg font-semibold tracking-widest text-center'>YIELD TRADING  <span className="hidden m-0 p-0 sm:block"></span> ON MARGIN</CardTitle>
                                    </CardHeader>
                                    <CardContent className="mt-4 text-center">
                                        <p>Amplify returns by leveraging up your bets.</p>
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                    </div>



                    <div className="container mx-auto space-y-6 divide-y divide-[#0ABAB5CC] px-6 pb-8 md:space-y-12 md:fixed md:inset-x-0 md:bottom-0">

                        <div className="grid justify-center pt-6 lg:justify-between">
                            <div className="flex flex-col text-[#f9fafb] self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                                <span>©2023 Temporal All rights reserved</span>
                            </div>
                            <div className="flex justify-center space-x-4 pt-8 lg:col-end-13 lg:pt-0">
                                <Speedy />
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </Layout>

        </>
    );
};

export default Learn;
