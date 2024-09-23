"use client";

import { Button } from "@/components/ui/button";
import splitTextWithReges from "@/utils/splitTextWithReges";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import TypingAnim from "@/animation/typingAnim/TypingAnim";
import { sentence } from "@/data/data";
import { Spotlight } from "@/aceternityUI/Spotlight";
import DownloadBtn from "@/aceternityUI/DownlaodBtn";

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
      className="h-screen"
    >
      <div className="container mx-auto h-full py-4 flex flex-col justify-center items-center relative ">
        <div className="flex flex-col justify-center items-center  ">
          {/* row 1 */}
          <div className="text-center">
            <TypingAnim />
            {/* <Spotlight
              className="top-0 left-0 md:left-0 md:top-[-4rem]"
              fill="white"
            /> */}
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
          {/* row 2 */}
          <div className="flex flex-col items-center xl:flex-row gap-5">
            <button className="">
              <DownloadBtn name="Download CV" />
            </button>
            <SocialLinks />
          </div>

        </div>

      </div>
    </motion.div>
  );
};
export default Home;
