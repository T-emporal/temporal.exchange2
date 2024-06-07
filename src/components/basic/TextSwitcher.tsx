'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { chakraPetch } from '@/lib/font';

interface TextSwitcherProps {
  staticText: string;
  texts: string[];
  interval?: number;
}

const TextSwitcher: React.FC<TextSwitcherProps> = ({ staticText, texts, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textContainerRef = useRef<HTMLDivElement | null>(null); 


  const updateCurrentIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    let frameId: number;
    let lastTimestamp = 0; 

    // Update Width after Animation:
    const updateWidth = () => {
      if (textContainerRef.current) {
        textContainerRef.current.style.width = 
            `${textContainerRef.current.scrollWidth}px`;
      }
    };

  
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp; 
  
      const progress = timestamp - lastTimestamp;
  
      if (progress > interval) {
        updateCurrentIndex();
        lastTimestamp = timestamp;
        updateWidth(); // Update width after the text changes
      }
  
      frameId = requestAnimationFrame(animate);
    };
  
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId); 
  }, []);

  const animationVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
<div className={`flex flex-col items-center md:flex-row ${chakraPetch.className}`} ref={textContainerRef}> 
  <span className="mr-4 mb-4 md:mb-0 text-coffee">{staticText}</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={animationVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-temporal"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSwitcher;
