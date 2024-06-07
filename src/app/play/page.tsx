import type { NextPage } from "next";
import Image from 'next/image';
import Link from "next/link";

import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

import TetrisBoard from "@/components/tetris/PlayTetris";
import RootLayout from "../layout";
import LottiePlayer from "@/components/basic/LottiePlayer";
import { chakraPetch } from "@/lib/font";

const Play: NextPage = () => {

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

    return (
        <RootLayout>
            <div className="hidden md:flex md:flex-col" style={{
                backgroundImage: `url('/Noise-BG.svg')`,
                backgroundSize: 'cover',
                backgroundAttachment: "fixed",
            }}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="flex gap-40 items-center justify-center">

                        <TetrisBoard></TetrisBoard>

                        <div className="flex flex-col items-center justify-center">


                            <span className={`text-coffee text-4xl mb-20 ${chakraPetch.className}`}>
                                THANK<span className="text-temporal ml-4">YOU :&#41;</span>
                            </span>

                            <h1 className="text-xl flex flex-grow text-center  text-coffee">

                                <span style={{ marginRight: '10px' }}>Play some</span>
                                {tetrisLetters.map(({ letter, color }, index) => (
                                    <span key={index} style={{ color }}>
                                        {letter}
                                    </span>
                                ))}
                                <LottiePlayer
                                    src="/Blocks.lottie"
                                    autoplay
                                    loop
                                    speed={1}
                                    className=''
                                    style={{ paddingBottom: "2px", marginLeft: "10px", marginRight: "10px", height: "20px", width: "auto" }}
                                >
                                </LottiePlayer>
                                {" "}in the mean time!
                            </h1>
                            <h1 className="text-xl text-center text-coffee mt-2 ">
                                We&apos;ll reach out soon
                            </h1>

                            <div className="flex flex-col items-center justify-center rounded-xl p-5 bg-stone-950/50 backdrop-blur-[4px] mt-20">
                                <Image src="/arrow-keys.svg" width={150} height={150} alt="Arrow Keys Control" />
                                <h1 className="text-coffee text-center text-xl mt-8">
                                    Click <span className="text-temporal"> New Game </span> and <br />  use <span className="text-temporal"> Arrow Keys </span> to play
                                </h1>
                            </div>


                        </div>
                    </div>

                    <Link className="mt-8 text-coffee text-lg flex items-center hover:text-temporal" href={"/"}>
                        <ArrowLeftCircleIcon className="mr-4 h-8 w-8" />
                        Go back to homepage
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:hidden">
                <h1 className="flex flex-col text-2xl space-y-8 mt-40 md:text-4xl md:mx-16 mx-12 text-center text-coffee font-open">
                    
                    <span className={`text-coffee text-4xl mb-8 ${chakraPetch.className}`}>
                        THANK<span className="text-temporal ml-4">YOU :&#41;</span>
                    </span>
                </h1>

                <h2 className="flex  text-xl mt-8 md:text-5xl md:mx-16 mx-12 text-center text-coffee ">
                    <span className="text-coffee md:hidden">
                        (PS: Open this link on a desktop device to play some{" "}
                        {tetrisLetters.map(({ letter, color }, index) => (
                            <span key={index} style={{ color }}>
                                {letter}
                            </span>
                        ))}
                        {" "})
                    </span>

                </h2>
            </div>
        </RootLayout>
    )
}

export default Play;