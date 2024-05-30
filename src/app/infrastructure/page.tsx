import React from 'react';
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import RootLayout from "@/app/layout";
import Navbar from "@/components/home/NavBar";
import Speedy from '@/components/basic/Speedy';
import Image from 'next/image';

import '@dotlottie/react-player/dist/index.css';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import LottiePlayer from '@/components/basic/LottiePlayer';
import CarouselCard from '@/components/basic/CarouselCard';
import { ChevronRight } from 'lucide-react';
import { chakraPetch } from '@/lib/font';

const Infrastructure: NextPage = () => {

    return (
        <>
            {/* <NextSeo title="Learn more about the magic behind Temporal" /> */}
            <RootLayout>
                <div className='md:h-screen'>

                    <Navbar></Navbar>

                    {/* <Tabs defaultValue="vAMM" className=" md:px-12 w-screen md:max-h-[70vh] bg-gradient-to-b from-black/70 to-transparent"> */}
                    <Tabs defaultValue="vAMM" className=" md:px-12 w-screen md:max-h-[70vh]">
                        <TabsList
                            className={`grid text-sm md:text-xl w-full grid-cols-3 rounded-none ${chakraPetch.className}`}
                            style={{
                                backgroundImage: `url('/Noise-BG.svg')`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}>
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 
                            data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:font-medium'
                                value="vAMM">TIME UNIFIED vAMM
                            </TabsTrigger>
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 
                            data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:font-medium'
                                value="feeder_pool">FEEDER POOL
                            </TabsTrigger>
                            <TabsTrigger className=' font-normal rounded-none border-0 border-temporal hover:bg-temporal/25 
                            data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:font-medium'
                                value="integration">PLUG-AND-PLAY
                            </TabsTrigger>
                        </TabsList>


                        <TabsContent value="vAMM">
                            <CarouselCard />
                        </TabsContent>


                        <TabsContent value="integration" className=' '>
                            <Card className='rounded-none border-0 border-temporal'
                                style={{
                                    backgroundImage: `url('/Noise-BG.svg')`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>
                                {/* <Card className='rounded-none faded-border border-temporal bg-gray-800/20 backdrop-blur-[4px]'> */}
                                <CardHeader className=' '>

                                </CardHeader>
                                <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-8 mx-8 min-h-[60vh]">
                                    <div className="flex flex-col flex-1 justify-between">
                                        <div className={`mt-8 transition-opacity duration-300 opacity-100`}>
                                            <CardTitle className='font-light text-temporal text-2xl mb-6'>
                                                Plug & Play Mechanism:
                                            </CardTitle>
                                            <h2 className='text-md mb-8 font-normal text-gray-500'>
                                                PLUG & PLAY MECHANISM
                                            </h2>
                                            <ul className='list-none pl-0 text-xl font-light text-coffee'>
                                                <li className='flex mb-8'>
                                                    <ChevronRight size={40} className="text-temporal mr-2" />
                                                    <span className="text-coffee">Extending functionality and increasing revenue for TradFi and DeFi Market Venues.</span>
                                                </li>
                                                <li className='flex mb-8'>
                                                    <ChevronRight size={40} className="text-temporal mr-2" />
                                                    <span className="text-coffee">Plug-and-play market infrastructure for easy deployment of outposts.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={`flex-1 flex items-center justify-center border border-gray-600 p-8`}>
                                        <div className='max-w-xl'>
                                            <LottiePlayer
                                                src="/LearnIntegrationPuzzle.lottie"
                                                autoplay
                                                loop
                                                speed={1}
                                                className=''
                                                style={{ height: "auto", width: "100%" }}>
                                            </LottiePlayer>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className=''>
                                </CardFooter>
                            </Card>
                        </TabsContent>


                        <TabsContent value="feeder_pool">
                            <Card className='rounded-none border-0 border-temporal px-8'
                                style={{
                                    backgroundImage: `url('/Noise-BG.svg')`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>
                                <CardHeader className=''>
                                    <CardTitle className='font-light text-temporal text-2xl mb-6 '>
                                        Feeder Pool
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col justify-center gap-4 min-h-[60vh]">
                                    <div>
                                        <ul className='list-none pl-0 text-xl font-light text-coffee'>
                                            <li className='flex mb-8'>
                                                <ChevronRight size={30} className="text-temporal mr-2" />
                                                <span className="text-coffee">Channelling liquidity to Market Venues. Channelling liquidity to Market Venues.</span>
                                            </li>
                                            <li className='flex mb-8'>
                                                <ChevronRight size={30} className="text-temporal mr-2" />
                                                <span className="text-coffee">LPs simply select base asset. Feeder Pools manage allocation across dApps to optimize for rewards.</span>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className='flex items-center justify-center'>
                                        <Image
                                            alt="Mobile Image"
                                            src="/LearnFeederPoolMobile.min.svg"
                                            height={450}
                                            width={450}
                                            className="md:hidden block"
                                            priority
                                        />

                                        <Image
                                            alt="Desktop Image"
                                            src="/LearnFeederPool.min.svg"
                                            height={150}
                                            width={850}
                                            className="hidden md:block"
                                            priority
                                        />
                                    </div>



                                </CardContent>
                                <CardFooter className='text-lg md:text-xl text-center flex items-center justify-center'>
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
            </RootLayout>

        </>
    );
};

export default Infrastructure;
