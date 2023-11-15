import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer () {
  return (
    <footer className="p-20">
      <ul className="flex justify-around w-1/2 m-auto">
        <Link href="https://github.com/Thms25" target="_blank">
          <li className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/thomas-allen-martinho/" target="_blank">
          <li className="icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </li>
        </Link>
        <Link href="https://www.instagram.com/thms_allen/" target="_blank">
          <li className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </Link>
        <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank">
          <li className="icon">
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </Link>
      </ul>
    </footer>
  )
}
