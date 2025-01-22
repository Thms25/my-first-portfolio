import Backdrop from './Backdrop'
import { motion } from 'framer-motion'

const DropIn = {
  init: {
    scale: 0,
    opacity: 0,
  },
  anim: {
    scale: 1,
    opacity: 1,
  },
  trs: {
    duration: 0.4,
    type: 'ease',
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
}

export default function Modal({ handleClose, image }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="mx-auto w-auto shadow-md"
        onClick={e => e.stopPropagation()}
        variants={DropIn}
        initial="init"
        animate="anim"
        transition={{ duration: 0.4, type: 'ease' }}
        exit="exit"
      >
        <iframe
          loading="lazy"
          src={image + '#zoom=70'}
          className="w-[420px] h-[360px] md:w-[720px] md:h-[480px] xl:w-[960px] xl:h-[720px]"
        />
      </motion.div>
    </Backdrop>
  )
}
