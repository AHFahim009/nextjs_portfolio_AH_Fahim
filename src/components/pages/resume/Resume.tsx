"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  about,
  education,
  myEducations,
  myRewards,
  skills,
  stats,
} from "@/data/whyHireMeData";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/aceternityUI/movingBorder";
import { HoverEffect } from "@/aceternityUI/Card-hover-effect";

import StatsCard from "./StatsCard";
import RewardCard from "./RewardCard";
import Link from "next/link";

const Resume = () => {
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
      className="mt-28 min-h-[80vh] flex justify-center ">
      <div

        className="container mx-auto h-full "
      >
        <Tabs
          defaultValue="about-me"
          className="flex flex-col xl:flex-row gap-[65px]"
        >
          <TabsList
            className="flex flex-col  gap-6 w-full
          max-w-[380px] mx-auto xl:mx-0
          "
          >
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="w-full min-h-[80vh] ">
            {/* about me */}
            <TabsContent value="about-me" className="w-full pb-12 ">
              <div className="flex flex-col gap-4 text-center xl:text-left ">
                <h1 className="text-4xl font-bold">{about.title}</h1>
                <p>{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={item.name}
                      className={`flex gap-2 justify-center xl:justify-start items-center ${index === 0 || index === 3 ? "xl:col-span-2" : ""
                        }`}
                    >
                      <span className="text-white/60">{item.name}</span>
                      <span className="text-xl">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-6 justify-center items-center mt-4">
                  {stats.map((item, i) => (
                    <StatsCard
                      key={i}
                      duration={item.duration}
                      subject={item.subject}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[24px] text-center xl:text-left ">
                <h1 className="text-4xl font-bold">Education</h1>
                <ScrollArea className="h-[400px]  pb-3">
                  <HoverEffect items={myEducations}></HoverEffect>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skill content */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[24px] text-center xl:text-left ">
                <h1 className="text-4xl font-bold">{skills.title}</h1>
                <p className="max-width-[600px] mx-auto xl:mx-0 text-white/60">
                  {skills.description}
                </p>

                <ScrollArea className="h-[330px] pb-3 ">
                  <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {skills.skillLists.map((item) => (
                      <li key={item.name}>
                        <TooltipProvider delayDuration={300}>
                          <Tooltip>
                            <TooltipTrigger className="w-[100px] h-[100px] bg-[#27272c] flex justify-center items-center">
                              <span className="text-6xl transition-all duration-300 hover:text-accent">
                                {item.icon}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* courses content */}
            <TabsContent value="courses" className="w-full px-2 pb-3">
              <div className="flex flex-col gap-[24px] text-center xl:text-left ">
                <h1 className="text-4xl font-bold">{education.title}</h1>
                <p className="max-width-[600px] mx-auto xl:mx-0 text-white/60">
                  {education.description}
                </p>

                <ScrollArea className="h-[330px] pb-3 px-2 ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item) => (
                      <Link href={item.siteLink ? item.siteLink : ""} key={item.institution}>
                        <Button
                          className="bg-[#232329]
                        flex flex-col items-center py-6 px-10 justify-center gap-1 lg:items-start
                        "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className=" tracking-wider
                          text-center lg:text-left text-xl 
                          "
                          >
                            {item.degree}
                          </h3>
                          <div>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </Button>
                      </Link>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* rewards content */}
            <TabsContent value="rewards" className="w-full pb-4">
              <ScrollArea className="h-[400px] ">
                <div className="w-full  ">
                  {myRewards.map((item, i) => (
                    <RewardCard key={i} item={item} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
