import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { CiInstagram } from 'react-icons/ci'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-8 md:p-20">
      <ul className="flex justify-around w-1/2 m-auto">
        <Link href="https://github.com/Thms25" target="_blank">
          <li className="icon">
            <FaGithub />
          </li>
        </Link>
        <Link
          href="https://www.linkedin.com/in/thomas-allen-martinho/"
          target="_blank"
        >
          <li className="icon">
            <FaLinkedin />
          </li>
        </Link>
        <Link href="https://www.instagram.com/thms_allen/" target="_blank">
          <li className="icon">
            <CiInstagram />
          </li>
        </Link>
        <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank">
          <li className="icon">
            <FaYoutube />
          </li>
        </Link>
      </ul>
    </footer>
  )
}
