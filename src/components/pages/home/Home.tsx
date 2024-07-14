"use client";

import { Button } from "@/components/ui/button";
import splitTextWithReges from "@/utils/splitTextWithReges";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import TypingAnim from "@/animation/typingAnim/TypingAnim";
import { sentence } from "@/data/data";
import { Spotlight } from "@/aceternityUI/Spotlight";



const Home = () => {
  const subHeading = splitTextWithReges(sentence);
  const charVariant = {

    hidden: {
      opacity: 0,
    },
    reveal: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center relative ">
          {/* col 1 */}
          <div className="text-center">

            <TypingAnim />
            <Spotlight
              className="top-0 left-0 md:left-0 md:top-[-4rem]"
              fill="white"
            />
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">AH Fahim</span>
            </h1>
            {/*  typing text */}
            <motion.p
              initial="hidden"
              whileInView="reveal"
              transition={{ staggerChildren: 0.02, delayChildren: 1 }}
              className=" max-w-[650px]  mb-6 text-white/80"
            >
              {subHeading.map((text) => (
                <motion.span
                  key={text}
                  transition={{

                    duration: 0.5,
                  }}

                  variants={charVariant}
                >
                  {text}
                </motion.span>
              ))}
            </motion.p>
          </div>
          {/* col 2 */}
          <div className="flex flex-col items-center xl:flex-row gap-5">
            <Button
              variant="outline"
              size="lg"
              className="uppercase rounded-full flex gap-2 text-accent font-bold"
            >
              <span className="">Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
