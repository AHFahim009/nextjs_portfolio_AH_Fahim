"use client";
import { BackgroundGradient } from "@/aceternityUI/Background-gradient";
import { motion } from "framer-motion";


const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="services-page pt-32 pb-24 flex min-h-[100vh] justify-center items-center"
    >
      <div className="container mx-auto relative timeline">
        <div className="w-[50%] relative left-content content-box md:pr-6 ">
          <span className="absolute z-[999] bg-accent  rounded-full w-[30px] h-[30px] top-[-2px] "></span>
          <BackgroundGradient
            animate={true}
            className="flex-1 p-6 flex flex-col gap-6 bg-black rounded-[22px] h-full "
          >
            <h2 className="text-2xl font-bold tracking-wider">
              Complete Web Development
            </h2>
            <p>
              From initial concept to deployment, I handle all aspects of web
              development. Whether it&apos;s frontend or backend.{" "}
            </p>
          </BackgroundGradient>
        </div>
        <div className="w-[50%] relative  right-content content-box md:pl-6  ">
          <span className="absolute z-[999] bg-accent  rounded-full w-[30px] h-[30px] top-[-2px] "></span>
          <BackgroundGradient
            animate={true}
            className="flex-1 p-6 flex flex-col gap-6 bg-black rounded-[22px] h-full "
          >
            <h2 className="text-2xl font-bold tracking-wider">
              Figma to Code Implementation
            </h2>
            <p>
              I transform your Figma designs into fully functional and
              responsive web pages.I ensure the final product matches your
              vision precisely
            </p>
          </BackgroundGradient>
        </div>
        <div className="w-[50%] relative left-content content-box md:pr-6 ">
          <span className="absolute z-[999] bg-accent  rounded-full w-[30px] h-[30px] top-[-2px] "></span>
          <BackgroundGradient
            animate={true}
            className="flex-1 p-6 flex flex-col gap-6 bg-black rounded-[22px] h-full "
          >
            <h2 className="text-2xl font-bold tracking-wider">
              Code Inspection & Bug Fixing
            </h2>
            <p>
              I provide detailed code inspections and troubleshooting services
              to identify and resolve bugs in your project
            </p>
          </BackgroundGradient>
        </div>
        <div className="w-[50%] relative  right-content content-box md:pl-6">
          <span className="absolute z-[999] bg-accent  rounded-full w-[30px] h-[30px] top-[-2px] "></span>
          <BackgroundGradient
            animate={true}
            className="flex-1 p-6 flex flex-col gap-6 bg-black rounded-[22px] h-full "
          >
            <h2 className="text-2xl font-bold tracking-wider">
              Problem Solving & Optimization
            </h2>
            <p>
              I offer problem-solving and optimization services to enhance your
              web application&apos;s performance. Whether it&apos;s optimizing
              code for speed or refining processes for efficiency.
            </p>
          </BackgroundGradient>
        </div>
      </div>
    </motion.div>
  );
};
export default Services;
