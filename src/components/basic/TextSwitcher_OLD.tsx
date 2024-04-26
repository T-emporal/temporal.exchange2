import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextSwitcherProps {
  staticText: string;
  texts: string[];
  interval?: number;
}

const TextSwitcher: React.FC<TextSwitcherProps> = ({ staticText, texts, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    let frameId: number;
    let lastTimestamp = 0; 
  
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp; 
  
      const progress = timestamp - lastTimestamp;
  
      if (progress > interval) {
        updateCurrentIndex();
        lastTimestamp = timestamp; 
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
<div className="flex flex-col items-center text-temporal font-medium md:flex-row"> 
      <span className="mr-4 mb-4 md:mb-0 text-white font-medium">{staticText}</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={animationVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="text-temporal font-medium"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSwitcher;
