import type { NextPage } from "next";
import Image from 'next/image';

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import { NextSeo } from "next-seo";
import { Fragment, useEffect, useState } from "react";

import Board from '@/components/tetris/Board';
import { useTetris } from '../hooks/useTetris';

import Layout from "@/components/home/Layout";

const ThankYou: NextPage = () => {

    const [isHovered, setIsHovered] = useState(false);
    const { board, startGame, isPlaying, score } = useTetris();

    const [showTetris, setShowTetris] = useState(false);

    // const [rowCount, setRowCount] = useState<number>(0);
    // const [isRowCountLoading, setIsRowCountLoading] = useState<boolean>(true);


    const toggleView = () => {
        setShowTetris(!showTetris);
    };

    const tetrisLetters = [
        { letter: "T", color: "#0ABAB5" },
        { letter: "e", color: "#C39B9D" },
        { letter: "m", color: "#C3B89B" },
        { letter: "p", color: "#9A9DCC" },
        { letter: "t", color: "#C3B89B" },
        { letter: "r", color: "#0ABAB5" },
        { letter: "i", color: "#9A9DCC" },
        { letter: "s", color: "#C39B9D" },
    ];

    return (<Fragment>
        <NextSeo title="Thank You" />
        <Layout>
            <div className="hidden md:flex md:flex-col">
                <div className={`flex gap-40 items-center justify-center h-screen ${showTetris ? 'animate-slideUp' : ''}`}>
                    <div className="flex flex-col items-center justify-center">
                        <div className="h-full mx-5 relative backdrop-blur-[6px] text-xl rounded-xl p-10"
                            style={{
                                background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0.2) 100%)',
                                boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                            }}>
                            <h2 className="text-center text-xl text-temporal mb-4">Score: <span className="text-white">{score}</span></h2>

                            <Board currentBoard={board} />
                            <div className="flex flex-col items-center">
                                {isPlaying ? (
                                    <button className="mt-8 rounded-full border-2 border-temporal text-base px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>RESTART</button>
                                ) : (
                                    <button className="mt-8 rounded-full border-2 border-temporal text-base px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors" onClick={startGame}>NEW GAME</button>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-center">


                        <span className="text-temporal text-3xl mb-6">
                            Thank You :&#41;
                        </span>

                        <h1 className="text-3xl flex flex-grow text-center font-extralight text-white">

                            <span style={{ marginRight: '5px' }}>Play some</span>
                            {tetrisLetters.map(({ letter, color }, index) => (
                                <span key={index} style={{ color }}>
                                    {letter}
                                </span>
                            ))}
                            <DotLottiePlayer
                                src="./Blocks.lottie"
                                autoplay
                                loop
                                speed={1}
                                style={{ paddingBottom: "2px", marginLeft: "10px", marginRight: "10px", height: "35px", width: "auto" }}
                            >
                            </DotLottiePlayer>
                            {" "}in the mean time!
                        </h1>
                        <h1 className="text-3xl text-center text-white my-6 font-extralight">
                            We&apos;ll reach out soon
                        </h1>

                        <div className="flex flex-col items-center justify-center rounded-xl p-5 bg-gray-600/20 backdrop-blur-[4px] mt-10">
                            <Image src="/arrow-keys.svg" width={180} height={180} alt="Arrow Keys Control" />
                            <h1 className="text-white text-center text-2xl mt-8">
                                Click <span className="text-temporal"> New Game </span> and <br />  use <span className="text-temporal"> Arrow Keys </span> to play
                            </h1>
                        </div>

                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={(): void => { void (window.location.href = "/"); }}
                            className="cursor-pointer flex items-center space-x-4 mt-12 mb-4 text-white font-extralight hover:text-[#0ABAB5]"
                        >
                            <Image src={isHovered ? "/arrow-left-circle-hover.svg" : "/arrow-left-circle.svg"} width={24} height={24} alt="Go back" />
                            <span>Go back to Homepage</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:hidden">
                <h1 className="flex flex-col text-2xl space-y-8 mt-40 md:text-4xl md:mx-16 mx-12 text-center text-white font-open">
                    <span className="text-temporal">
                        Thank You :&#41;
                    </span>
                </h1>

                <h2 className="flex  text-xl mt-8 md:text-5xl md:mx-16 mx-12 text-center text-white font-open font-extralight">
                    <span className="text-white md:hidden">
                        (PS: Open this on a desktop device to play some{" "}
                        {tetrisLetters.map(({ letter, color }, index) => (
                            <span key={index} style={{ color }}>
                                {letter}
                            </span>
                        ))}
                        {" "})
                    </span>

                </h2>
            </div>
        </Layout>
    </Fragment>)
}

export default ThankYou;