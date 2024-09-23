"use client";
import Image from "next/image";
import image1 from "../../../assests/book_e_commerce_figma (2).png";
import { motion } from "framer-motion";
import { projectData } from "@/data/projectData";
import ProjectLink from "./ProjectLink";
import { log } from "console";

const LatestProjects = () => {
  console.log(3 % 2 === 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <div className=" container mx-auto pt-40 pb-8  ">
        {/* project */}
        {projectData.map((project, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-8 md:justify-between mb-28"
          >
            {/* col 1: image */}
            <div
              className={`${
                i % 2 === 0
                  ? "md:order-1 md:justify-start"
                  : "md:order-2 md:justify-end"
              } w-full md:w-1/2 flex justify-center `}
            >
              <div className="relative group inline-block">
                <Image
                  src={project.image}
                  width={500}
                  height={1000}
                  alt="Pioneer Digital"
                  className="rounded-md transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                {/* hover btn */}
                <button className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 -translate-y-full bg-[#000103] text-white text-sm font-medium px-4 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ProjectLink
                    backendCode={project.backendCode}
                    frontedCode={project.frontedCode}
                    liveLink={project.live}
                  />
                </button>
              </div>
            </div>
            {/* col 2: text */}
            <div
              className={`${
                i % 2 === 0 ? "md:order-2" : "md:order-1"
              } w-full md:w-[40%]`}
            >
              <h1 className="text-4xl font-bold text-red-500">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600">{project.type}</p>
              <p className="mt-4 text-white/60">{project.description}</p>
              <div className="mt-6 flex gap-4 flex-wrap">
                {project.tech.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
                  >
                    <span>#</span>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default LatestProjects;
