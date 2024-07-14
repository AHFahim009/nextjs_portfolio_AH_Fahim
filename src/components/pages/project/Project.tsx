"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { projectData } from "@/data/projectData";
import { Badge } from "@/components/ui/badge";
import { SwiperModule, SwiperOptions } from "swiper/types";
import SliderBtn from "./SliderBtn";
import ProjectLink from "./ProjectLink";

const Project = () => {
  const [project, setProject] = useState(projectData[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectData[currentIndex]);
  };

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
      <div className="container mx-auto pt-32 pb-12  ">
        <div className="  flex xl:flex-row flex-col justify-center items-center  gap-7 ">
          {/* col 1 */}
          <div className="xl:w-[50%] flex flex-col gap-5 order-2 xl:order-none">
            {/* outline */}
            <div className="text-outline text-6xl font-extrabold text-transparent  ">
              {project.num}
            </div>
            {/* project information */}
            <span>
              <Badge>{project.category}</Badge>
            </span>
            <div className="flex items-center gap-6">
              <h2 className="text-2xl">{project.title}</h2>
              <ProjectLink liveLink={project.live} gitLink={project.github} />
            </div>
            <p className="max-w-[500px] text-white/60">{project.description}</p>
            <ul className="flex gap-2 flex-wrap max-w-[500px]  ">
              {project.tech.map((item, i) => (
                <li key={i} className="text-[18px] text-accent">
                  {item}
                  {i !== project.tech.length - 1 && ","}
                </li>
              ))}
            </ul>
          </div>
          {/* col 2 */}
          <div className="xl:w-[50%] w-full  ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projectData.map((item, i) => (
                <SwiperSlide key={i}>
                  <ProjectCard item={item} />
                </SwiperSlide>
              ))}
              <SliderBtn />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Project;
