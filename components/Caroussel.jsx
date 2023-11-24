import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { basePath } from '@/next.config';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="w-full overflow-hidden m-auto grid items-center"
      style={{ width: '100%', height: '100%' }}
    >
      <div className="flex">
        <AnimatePresence initial={false} wait>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`w-full flex-shrink-0 ${
                index === currentIndex ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={0}
                height={0}
                src={`${basePath}${image}`}
                className='m-auto w-full h-full'
                alt={`Image ${index}`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrev}
          className="text-white bg-black bg-opacity-50 rounded-full p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>

        </button>
        <button
          onClick={handleNext}
          className="text-white bg-black bg-opacity-50 rounded-full p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>

        </button>
      </div>
    </div>
  );

};

export default Carousel;
