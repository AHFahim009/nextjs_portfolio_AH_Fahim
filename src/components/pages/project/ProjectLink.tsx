// tooltip
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BsArrowUpRight } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import Link from "next/link";

const ProjectLink = ({ liveLink, gitLink }: { liveLink: string, gitLink: string }) => {
  return (
    <div className="flex items-center gap-3">
      {/* live preview */}
      <Link href={liveLink}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-white/5 rounded-full ">
              <BsArrowUpRight className="text-2xl" />
            </TooltipTrigger>
            <TooltipContent>
              <p>live preview</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      {/* github repo */}
      <Link href={gitLink}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-white/5 rounded-full ">
              <BsGithub className="text-2xl" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Github repo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    </div>
  )
}
export default ProjectLink