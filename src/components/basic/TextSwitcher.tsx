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
  }, [texts.length, interval]);


  const animationVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="relative min-h-[100px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[currentIndex]}
          variants={animationVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
          className="mt-2 md:mt-4 text-temporal font-medium"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSwitcher;
