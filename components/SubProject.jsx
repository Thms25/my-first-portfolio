import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";


export default function SubProject({ project }) {
  return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-12 my-8 w-11/12 md:w-9/12 lg:w-8/12 m-auto border border-gray-300 shadow-lg rounded-lg bg-white"
      >
        <div>
          <h3 className="font-semibold text-2xl text-primary mb-4">
            {project.title} | {project.job}
          </h3>
          <p className="text-lg mb-6">{project.description}</p>

          <h4 className="font-semibold text-lg mb-2">Tools Used:</h4>
          <div className="flex flex-wrap mb-6">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-4 py-2 rounded-full m-1"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <Link href={project.link} target="_blank" className="bg-primary text-white py-2 px-6 rounded-lg uppercase text-sm hover:bg-opacity-80 transition duration-300">
              Preview {project.title}
            </Link>
          </div>

          {project.caroussel.length && (
            <div className="bg-neutral-800">
              <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                  Scroll down
                </span>
              </div>
              <Caroussel imageArray={project.caroussel}/>
              <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                  Scroll up
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* <Image
            src=""
            alt="Project Image"
            className="rounded-lg shadow-md"
          />
          <Image
            src=""
            alt="Project Image"
            className="rounded-lg shadow-md"
          /> */}
        </div>
      </motion.div>

  );
}

const Caroussel = ({ imageArray }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {imageArray.map((image, index) => {
            return <Card image={image} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ image }) => {
  return (
    <div
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <Image
              priority
              width={720}
              height={480}
              src={image}
              alt="test image"
              // src='/images/me.jpeg'
              className='m-auto my-6 w-full sm:w-1/2'
          />
      {/* <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div> */}
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          test
        </p>
      </div> */}
    </div>
  );
};
