import React from 'react';
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Layout from "@/components/basic/Layout";
import Navbar from "@/components/home/NavBar";
import Speedy from '@/components/basic/Speedy';

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const Learn: NextPage = () => {

    return (
        <>
            <NextSeo title="Learn more about the magic behind Temporal" />
            <Layout>
                <div className='md:h-screen'>

                    <Navbar></Navbar>

                    {/* <Tabs defaultValue="vAMM" className=" md:px-12 w-screen md:max-h-[70vh] bg-gradient-to-b from-black/70 to-transparent"> */}
                    <Tabs defaultValue="vAMM" className=" md:px-12 w-screen md:max-h-[70vh] ">
                        <TabsList className="grid text-sm md:text-xl w-full grid-cols-3 rounded-none bg-temporal/5 backdrop-blur-[8px] bg-gradient-to-b from-temporal/10 from-50% to-temporal/5 ">
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:font-medium' value="vAMM">Unified vAMM</TabsTrigger>
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:font-medium' value="feeder_pool">Feeder Pool</TabsTrigger>
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:font-medium' value="integration">Plug-And-Play</TabsTrigger>
                        </TabsList>


                        <TabsContent value="vAMM">

                            {/* <Card className='rounded-none border-0 border-temporal bg-gray-800/20 backdrop-blur-[4px] '> */}
                            <Card className='rounded-none border-0 border-temporal backdrop-blur-[8px] bg-radient-ellipse-t from-temporal/20 from-0% to-transparent to-80%'>

                                <CardHeader className=' text-center flex items-center justify-center'>
                                    <CardTitle className='font-normal text-lg md:text-xl'>
                                        Single liquidity pool. Continuous, market-determined forward curves for every asset
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col md:flex-row justify-center gap-12 mt-4">

                                    <Card className='rounded-none border-temporal/40 bg-transparent bg-radient-ellipse-t from-gray-600/30 from-0% to-transparent to-80%'>
                                        <CardHeader className='p-2 text-md border-b border-temporal/40 text-center flex items-center justify-center'>
                                            <CardTitle className='font-light text-lg'>
                                                <span className=' font-medium'>
                                                    Current Paradigm:&nbsp;
                                                </span>
                                                Maturity-Fragmented Markets (Ex: BTC)
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                                            <img alt="Product" className="aspect-[1.6]" height="150" src="/LearnvAMMCurrent.svg" width="550" />
                                        </CardContent>
                                    </Card>
                                    <Card className='rounded-none border-temporal/40 bg-transparent bg-radient-ellipse-t from-gray-600/30 from-0% to-transparent to-80%'>
                                        <CardHeader className='p-2 text-md border-b border-temporal/40 text-center flex items-center justify-center'>
                                            <CardTitle className='font-light text-lg'>
                                                <span className=' font-medium'>
                                                    Future Paradigm:&nbsp;
                                                </span>
                                                Forward-curve Unified Markets (Ex: BTC)
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                                            <img alt="Product" className="aspect-[1.6]" height="150" src="/LearnvAMMFuture.svg" width="550" />
                                        </CardContent>
                                    </Card>

                                </CardContent>
                                <CardFooter className='text-lg md:text-xl text-center flex-col md:flex-row gap-4 items-center justify-center'>
                                    <p> • Pricing fixed income and derivatives of any duration </p>
                                    <p> • Deeper liquidity for all maturities </p>
                                </CardFooter>
                            </Card>
                        </TabsContent>


                        <TabsContent value="integration">
                            <Card className='rounded-none border-0 border-temporal backdrop-blur-[8px] bg-radient-ellipse-t from-temporal/20 from-0% to-transparent to-80%'>
                                {/* <Card className='rounded-none faded-border border-temporal bg-gray-800/20 backdrop-blur-[4px]'> */}
                                <CardHeader className=' text-center flex items-center justify-center'>
                                    <CardTitle className='font-normal text-lg md:text-xl'>
                                        Extending functionality and increasing revenue for TradFi and DeFi Market Venues
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col md:flex-row justify-center gap-12 mt-4">
                                    <div className='max-w-xl'>
                                        <DotLottiePlayer
                                            src="./LearnIntegrationPuzzle.lottie"
                                            autoplay
                                            loop
                                            speed={1}
                                            style={{ height: "auto", width: "100%" }}
                                        />
                                    </div>



                                    {/* <Card className='rounded-none faded-border bg-gray-900/5 backdrop-blur-[4px]'> */}


                                    {/* <Card className='rounded-none border-0 bg-transparent'>
                                      
                                        <CardContent className="container border max-w-xl py-6 mt-4">
                                            <DotLottiePlayer
                                                src="./learn-integration-puzzle.lottie"
                                                autoplay
                                                speed={1}
                                                className=''
                                                style={{ height: "auto", width: "100%" }}
                                            />
                                        </CardContent>
                                    </Card> */}

                                </CardContent>
                                <CardFooter className='text-lg md:text-xl text-center flex items-center justify-center'>
                                    Plug-and-play market infrastructure for easy deployment of outposts
                                </CardFooter>
                            </Card>
                        </TabsContent>


                        <TabsContent value="feeder_pool">
                            <Card className='rounded-none border-0 border-temporal backdrop-blur-[8px] bg-radient-ellipse-t from-temporal/20 from-0% to-transparent to-80%'>
                                <CardHeader className='text-xl text-center flex items-center justify-center'>
                                    <CardTitle className='font-normal text-lg md:text-xl'>
                                        Channelling liquidity to Market Venues
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col md:flex-row justify-center gap-4">

                                    <Card className='rounded-none border-none bg-transparent'>

                                        <CardContent className="flex justify-center">
                                            <div className="container">
                                                <img alt="Mobile Image"
                                                    className="md:hidden block "
                                                    src="/LearnFeederPoolMobile.svg"
                                                    height="450"
                                                    width="auto"
                                                />

                                                <img alt="Desktop Image"
                                                    className="hidden md:block"
                                                    src="/LearnFeederPool.svg"
                                                    height="150"
                                                    width="850"
                                                />
                                            </div>

                                        </CardContent>
                                    </Card>

                                </CardContent>
                                <CardFooter className='text-xl text-center flex items-center justify-center'>
                                    LPs simply select base asset. Feeder Pools manage allocation across dApps to optimize for rewards.
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>





                    {/* <div className="container mx-auto space-y-6 divide-y divide-[#0ABAB5CC] px-6 pb-8 md:space-y-12 md:fixed md:inset-x-0 md:bottom-0">

                        <div className="grid justify-center pt-6 lg:justify-between">
                            <div className="flex flex-col text-[#f9fafb] self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                                <span>©2023 Temporal All rights reserved</span>
                            </div>
                            <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
                                <Speedy />
                            </div>
                        </div>
                    </div> */}
                </div>
            </Layout>

        </>
    );
};

export default Learn;
