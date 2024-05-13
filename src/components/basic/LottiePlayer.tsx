'use client'; // Keep 'use client' as needed

import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

interface LottiePlayerProps {
    src: string;
    autoplay?: boolean;
    loop?: boolean;
    speed?: number;
    className?: string;
    style?: React.CSSProperties;
}

const LottiePlayer: React.FC<LottiePlayerProps> = ({ src, autoplay, loop, speed, className, style }) => {
    return (
        <DotLottiePlayer
            src={src}
            autoplay={autoplay}
            loop={loop}
            speed={speed}
            className={className}
            style={style}
        />
    );
};

export default LottiePlayer;

