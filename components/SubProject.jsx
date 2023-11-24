import { motion, useTransform } from "framer-motion";
import Link from "next/link";

export default function SubProject({ project, range, progress, targetscale, index, onOpen }) {
  const scale = useTransform(progress, range, [1, targetscale])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ scale: scale }}
      className={`p-8 md:p-12 my-8 w-full m-auto border border-gray-300 shadow-lg rounded-lg ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`}
    >
        <h3 className={`font-semibold text-2xl ${index % 2 === 0 ? "text-light" : "text-primary"} mb-6`}>
          {project.title} | {project.job}
        </h3>
      <div className="md:px-4 lg:columns-2">
        <p className={`text-lg mb-6 ${index % 2 === 0 ? "text-light" : "text-dark"}`}>{project.description}</p>
        <div className="flex flex-wrap mb-6 justify-evenly">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-gray-200 text-md px-5 py-3 rounded-full m-2"
            >
              {tool}
            </span>
          ))}
        </div>
        {project.caroussel.length && (
          <div className="flex justify-evenly m-auto">
            <button
              onClick={() => onOpen(true, project.caroussel)}
              className={`${index % 2 === 0 ? "border-light border text-light" : "text-light bg-primary"} py-3 px-6 rounded-lg uppercase text-sm hover:bg-opacity-80 transition duration-300 flex justify-around w-36`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-2">Preview</span>
            </button>

            {project.link !== "" && (
              <div className="">
                <Link href={project.link} target="_blank" className="bg-primary text-white py-3 px-6 rounded-lg uppercase text-sm hover:bg-opacity-80 transition duration-300 flex justify-around w-36">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <span className="ml-2">
                    Visit
                  </span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
