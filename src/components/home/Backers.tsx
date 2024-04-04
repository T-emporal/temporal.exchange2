import React from 'react';
import type { NextPage } from "next";
import Image from 'next/image';

import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const actions = [
    { icon: <MailIcon />, name: 'Email', url: 'https://Mail.com' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://LinkedIn.com' },
    { icon: <XIcon />, name: 'X (Twitter)', url: 'https://X.com' },
    { icon: <TelegramIcon />, name: 'Telegram', url: 'https://Telegram.com' },
    { icon: <YouTubeIcon />, name: 'YouTube', url: 'https://YouTube.com' },
];


const Backers: NextPage = () => {
    const navigateToUrl = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (

        <div className="sm:h-[15vh] bg-black w-full container mx-auto py-6 px-4 md:px-24 ">
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
                    <SpeedDial
                        ariaLabel="Social Links"
                        sx={{ position: 'absolute', bottom: 10, right: 0}}
                        icon={<ChatBubbleOutlineOutlinedIcon/>}
                        FabProps={{ size: "medium", style: {border: "2px solid #0ABAB5", backgroundColor:"black", color: "#0ABAB5" } }}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={() => navigateToUrl(action.url)}
                            />
                        ))}
                    </SpeedDial>
                </div>


            </div>
        </div>

    )
}

export default Backers;