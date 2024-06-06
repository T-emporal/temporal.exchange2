'use client'

import React, { useState } from 'react';
import type { NextPage } from "next";


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { motion } from 'framer-motion';

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

const NotifyForm: NextPage = () => {

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
                                <SelectContent className='bg-gray-400  p-3'>
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



        </>
    );
};

export default NotifyForm;
