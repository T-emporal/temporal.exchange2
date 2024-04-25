import React, { useEffect, useState } from 'react';
import { ArrowLeftCircleIcon, ArrowPathIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Layout from "@/components/home/Layout";
import Navbar from "@/components/home/NavBar";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { motion } from 'framer-motion';
import Speedy from '@/components/basic/Speedy';

interface ErrorResponse {
    message: string;
}

interface Level {
    name: string;
    value: string;
}
const levels = [
    { name: 'Yield Farmer', value: 'Yield Farmer' },
    { name: 'Professional Trader', value: 'Professional Trader' },
    { name: 'Institution / Ecosystem', value: 'Institution / Ecosystem' },
];

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Waitlist: NextPage = () => {

    const [selectedLevel, setSelectedLevel] = useState<Level>(levels[0] as Level);
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [telegram, setTelegram] = useState('');
    const [discord, setDiscord] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        void (async () => {
            setIsLoading(true);

            const data = selectedLevel.value === 'Yield Farmer'
                ? { name, level: selectedLevel.value, telegramHandle: telegram, discordHandle: discord }
                : { name, level: selectedLevel.value, company, email };

            console.log('Data: ', data);

            try {
                const res = await fetch('/api/sheet', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (res.status === 200) {
                    window.location.href = "/play";
                } else {
                    const errorResponse = (await res.json()) as ErrorResponse;
                    alert(`Error: ${errorResponse.message}`);
                }
            } catch (error) {
                console.error('An error occurred:', error);
                alert("Some error occurred. Please try again");
            } finally {
                setIsLoading(false);
            }
        })();
    };

    const isSubmitDisabled = isLoading || name.trim() === '' || (selectedLevel.value === 'Yield Farmer' ? telegram.trim() === '' && discord.trim() === '' : company.trim() === '' && email.trim() === '');

    const handleLevelChange = (newLevelValue: string) => {
        const newLevel = levels.find(level => level.value === newLevelValue);
        if (newLevel) {
            setSelectedLevel(newLevel);
        }
    };

    return (
        <>
            <NextSeo title="Coming soon" />
            <Layout>
                <div className='md:h-screen'>

                    <Navbar></Navbar>

                    <main className="flex mt-20 flex-col items-center justify-center mb-5 xl:mb-20">

                        <div className="text-center text-3xl leading-[70px] mt-6 text-white">
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

                        <div className="text-center w-1/2 text-white">
                            <form className="space-y-6 mt-12" onSubmit={onSubmit}>
                                <div className="flex-row md:flex gap-4 space-y-6 md:space-y-0">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className=" flex-1 placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Select onValueChange={handleLevelChange}>
                                            <SelectTrigger className="border rounded-xl bg-transparent border-temporal border-solid w-full py-6">
                                                <SelectValue className='px-3' placeholder="Select Level" />
                                            </SelectTrigger>
                                            <SelectContent className=' bg-black px-3'>
                                                {levels.map((level) => (
                                                    <SelectItem key={level.name} value={level.value}>
                                                        {level.value}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>


                                </div>
                                {selectedLevel.name === 'Yield Farmer' && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeInVariants}
                                        className="flex-row md:flex gap-4"
                                    >
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Telegram Handle"
                                                value={telegram}
                                                onChange={(e) => setTelegram(e.target.value)}
                                                className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full mb-6 py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Discord Tag"
                                                value={discord}
                                                onChange={(e) => setDiscord(e.target.value)}
                                                className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                                            />
                                        </div>
                                    </motion.div>

                                )}
                                {(selectedLevel.name === 'Professional Trader' || selectedLevel.name === 'Institution / Ecosystem') && (
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={fadeInVariants}
                                        className="flex-row md:flex gap-4"
                                    >
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                placeholder="Company"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:outline-none focus:border-temporal"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:outline-none focus:border-temporal"
                                            />
                                        </div>
                                    </motion.div>

                                )}

                                <div className="flex justify-center w-full">
                                    <button
                                        type="submit"
                                        disabled={isSubmitDisabled}
                                        className={`justify-center flex border-temporal bg-temporal ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-temporal/80 hover:bg-temporal/80'} text-black font-semibold py-3 px-6 rounded-xl relative`}
                                    >
                                        Submit
                                        {isLoading && (
                                            <div className="absolute bottom-0 left-0 right-0 mb-1 h-1 flex justify-center">
                                                <div className="loader"></div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <Link className="mt-16 text-white text-lg flex items-center hover:text-temporal" href={"/"}>
                            <ArrowLeftCircleIcon className="mr-2 h-10 w-10" />
                            Go back to homepage
                        </Link>
                    </main>

                    <div className="container mx-auto space-y-6 divide-y divide-[#0ABAB5CC] px-6 pb-8 md:space-y-12 md:fixed md:inset-x-0 md:bottom-0">

                        <div className="grid justify-center pt-6 lg:justify-between">
                            <div className="flex flex-col text-[#f9fafb] self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                                <span>©2023 Temporal All rights reserved</span>
                            </div>
                            <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
                                <Speedy />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    );
};

export default Waitlist;
