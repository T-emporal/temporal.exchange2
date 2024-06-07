"use client";

import * as React from "react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const content = {
    current: {
        title: "Current Paradigm: ",
        subtitle: "MATURITY-FRAGMENTED MARKETS",
        bullets: [
            "Single liquidity pool. Continuous, market-determined forward curves for every asset.",
            "Pricing fixed income and derivatives of any duration. Deeper liquidity for all maturities.",
        ],
        imageSrc: "/LearnvAMMCurrent.min.svg",
    },
    future: {
        title: "Future Paradigm: ",
        subtitle: "FORWARD-CURVE UNIFIED MARKETS",
        bullets: [
            "Single liquidity pool. Continuous, market-determined forward curves for every asset.",
            "Pricing fixed income and derivatives of any duration. Deeper liquidity for all maturities.",
        ],
        imageSrc: "/LearnvAMMFuture.min.svg",
    }
};

export function CarouselCard() {
    const [currentTab, setCurrentTab] = useState<"current" | "future">("current");
    const [fade, setFade] = useState(true);

    const handleTabChange = (tab: "current" | "future") => {
        setFade(false);
        setTimeout(() => {
            setCurrentTab(tab);
            setFade(true);
        }, 300);
    };

    return (
        <Card className='rounded-none border-0 '
            style={{
                backgroundImage: `url('/Noise-BG.svg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <CardHeader className=''>

            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-8 mx-8 min-h-[60vh]">
                <div className="flex flex-col flex-1 justify-between">
                    <div className='flex items-start mt-4 gap-4'>
                        <button
                            onClick={() => handleTabChange("current")}
                            className={`px-4 py-2 mb-2 rounded-md text-sm border border-coffee text-coffee ${currentTab === "current" ? 'bg-temporal/40' : ''}`}
                        >
                            CURRENT PARADIGM
                        </button>
                        <button
                            onClick={() => handleTabChange("future")}
                            className={`px-4 py-2 mb-2 rounded-md text-sm border border-coffee text-coffee  ${currentTab === "future" ? 'bg-temporal/40 glowing-button' : 'glowing-button'}`}
                        >
                            FUTURE PARADIGM
                        </button>
                    </div>
                    <div className={`mt-8 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        <CardTitle className='font-light text-temporal text-2xl mb-6'>
                            {content[currentTab].title}
                        </CardTitle>
                        <h2 className='text-md mb-8 font-normal text-gray-500'>{content[currentTab].subtitle}</h2>
                        <ul className='list-none pl-0 text-xl font-light'>
                            {content[currentTab].bullets.map((bullet, index) => (
                                <li key={index} className='flex mb-8'>
                                    <ChevronRight size={40} className="text-temporal mr-2" />
                                    <span className="text-coffee">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`flex-1 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        alt={currentTab === "current" ? "Current Paradigm" : "Future Paradigm"}
                        className=""
                        src={content[currentTab].imageSrc}
                        width={800}
                        height={150}
                        priority
                    />
                </div>
            </CardContent>
            <CardFooter className='text-lg md:text-xl text-center flex-col md:flex-row gap-4 items-center justify-center'>
                {/* Footer content if needed */}
            </CardFooter>
        </Card>
    );
}

export default CarouselCard;



