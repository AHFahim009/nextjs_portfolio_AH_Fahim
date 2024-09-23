"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const ProjectLink = ({ liveLink, frontedCode, backendCode }: { liveLink: string, frontedCode: string, backendCode: string }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Live preview */}
      <Link href={liveLink}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-white/5 rounded-full">
                <BsArrowUpRight className="text-2xl" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>live preview</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      {/* Frontend Code */}
      <Link href={frontedCode}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-white/5 rounded-full">
                <BsGithub className="text-2xl" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Frontend Code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      {/* Backend Code */}
      <Link href={backendCode}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-white/5 rounded-full">
                <BsGithub className="text-2xl" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Backend Code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}

export default ProjectLink;
