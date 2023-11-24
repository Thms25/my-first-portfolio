import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";


export default function SubProject({ project }) {
  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-12 my-8 w-full m-auto border border-gray-300 shadow-lg rounded-lg bg-white"
      >
          <h3 className="font-semibold text-2xl text-primary mb-6">
            {project.title} | {project.job}
          </h3>
        <div className="md:px-4 md:columns-2">
          <p className="text-lg mb-6">{project.description}</p>
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
        </div>

        <div className="hidden md:block">
          {project.caroussel.length > 1 ?
            (
              <Caroussel imageArray={project.caroussel}/>
            ) : (
              <Image
                width={720}
                height={480}
                src={project.caroussel[0]}
                alt={`${project.job} picture`}
                className='m-auto mt-8 w-3/4'
              />
            )
          }
        </div>

          {project.link !== "" && (
            <div className="m-2">
              <Link href={project.link} target="_blank" className="bg-primary text-white py-3 px-6 rounded-lg uppercase text-sm hover:bg-opacity-80 transition duration-300">
                Preview {project.title}
              </Link>
            </div>
          )}

      </motion.div>

  );
}

const Caroussel = ({ imageArray }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-2 md:gap-4">
          {imageArray.map((image, index) => {
            return (
              <div
                className="group relative h-[520px] w-[240px] sm:h-[440px] sm:w-[600px] xl:h-[640px] xl:w-[800px] overflow-hidden bg-neutral-200"
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};
