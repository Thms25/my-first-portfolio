'use client'

import Modal from './animations/modal'
import { AnimatePresence } from 'framer-motion'
import { Reveal } from './Reveal'
import { useState } from 'react'
import { CiCircleInfo } from 'react-icons/ci'

// ------------------------------------------------------------

export default function EduContent({ education }) {
  const [modalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)
  return (
    <div className="p-3 flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 opacity-75 mr-4 ml-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div>
        <Reveal initS={1} initX={50} duration={1}>
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{education.title}</h3>
            {education.image && (
              <span
                onClick={() => (modalOpen ? close() : open())}
                className="font-bold cursor-pointer"
              >
                <CiCircleInfo />
              </span>
            )}
          </div>
        </Reveal>
        <Reveal initS={1} initX={50} dly={1} duration={1}>
          <h5 className="font-semibold mb-2 display-flex">
            {education.school}{' '}
            <span className="font-normal">| {education.date} </span>
          </h5>
        </Reveal>
        <Reveal initS={1} initY={50} dly={1.5} duration={1}>
          <p>{education.description}</p>
        </Reveal>
      </div>
      {education.image && (
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              handleClose={close}
              image={education.image}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
