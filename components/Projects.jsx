'use client';

import { useRef, useState } from "react";
import SubProject from "./SubProject";
import { projects } from "@/utils/projectData";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Carousel from "./Caroussel";


export default function Projects () {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([])

  const projectRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ['start start', 'end end']
  })

  const handleOpen = (status, images) => {
    setImages(images)
    setIsOpen(status)
  }

  return (
    <div className="text-dark p-8 md:p-20 bg-light">
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Projects</h1>
        <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>My Projects</h2>
      </div>
      <div className="text-center" ref={projectRef}>
        {
          projects.map((project, index) => {
            const topVAl = 65 + (index * 25)
            const targetScale = 1 - ((projects.length - index) * 0.04);
            return (
              <div style={{ top: `${topVAl}px` }} className="sticky" key={index} >
                <SubProject
                  project={project}
                  range={[index * 0.18, 1]}
                  targetscale={targetScale}
                  progress={scrollYProgress}
                  index={index}
                  onOpen={handleOpen}
                />
              </div>
            )
          })
        }
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        carou={images}
      />
    </div>
  );
}

const SpringModal = ({ isOpen, setIsOpen, carou }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}

          onClick={() => setIsOpen(false)}
          className="backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-lg w-full max-w-4xl shadow-xl h-3/4 cursor-default relative overflow-hidden"
          >
            <Carousel images={carou}/>§
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
