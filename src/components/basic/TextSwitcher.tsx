import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextSwitcherProps {
  texts: string[];
  interval?: number;
}

const TextSwitcher: React.FC<TextSwitcherProps> = ({ texts, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCurrentIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const timerId = setInterval(updateCurrentIndex, interval);
    return () => clearInterval(timerId);
  }, [interval]); // Only update timer if the interval changes

  const animationVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="relative min-h-[100px]">
      <AnimatePresence mode="wait">
        {texts.map((text, index) => (
          <motion.div
            key={index} // Use index as key
            variants={animationVariants}
            initial="enter"
            animate={currentIndex === index ? "center" : "exit"} 
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
            className="mt-2 md:mt-4 text-temporal font-medium"
          >
            {text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextSwitcher;
