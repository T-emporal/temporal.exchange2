'use client'

import React, { useState } from 'react';
import type { NextPage } from "next";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const actions = [
    { icon: <MailIcon />, name: 'Email', url: 'mailto:hello@temporal.exchange' },
    { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/temporal-exchange' },
    { icon: <XIcon />, name: 'X (Twitter)', url: 'https://twitter.com/TemporalFinance' },
    { icon: <YouTubeIcon />, name: 'YouTube', url: 'https://www.youtube.com/@TemporalFinance' },
    // { icon: <TelegramIcon />, name: 'Telegram', url: 'https://Telegram.com' },
];

const Speedy: NextPage = () => {
    const navigateToUrl = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (

        <div className="flex p-4 justify-end items-center relative">
            <SpeedDial
                ariaLabel="Social Links"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    '& .MuiSpeedDial-fab': {
                        border: "2px solid #0ABAB5",
                        backgroundColor: isOpen ? "#0ABAB5" : "black",
                        color: isOpen ? "black" : "#0ABAB5",
                    }
                }}
                icon={<GroupIcon />}
                FabProps={{ size: "medium" }}
                onOpen={handleOpen}
                onClose={handleClose}
                open={isOpen} 
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        onClick={() => navigateToUrl(action.url)}
                        sx={{
                            border: "2px solid #0ABAB5",
                            bgcolor: 'black',
                            color: '#0ABAB5',
                            ':hover': {
                                bgcolor: '#0ABAB5',
                                color: 'black',
                            },
                        }}
                        FabProps={{ size: "medium" }}
                    />
                ))}
            </SpeedDial>
        </div>

    )
}

export default Speedy;