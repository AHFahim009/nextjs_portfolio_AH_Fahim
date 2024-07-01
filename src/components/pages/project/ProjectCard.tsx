import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/aceternityUI/3d-card";
const ProjectCard = ({ item }: any) => {
  return (

    <CardContainer className="w-full inter-var" >
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  border  rounded-xl h-full w-full">
        <CardItem translateZ="100" className="h-[380px] relative w-full">
          <div className="h-full w-full  relative">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              className="h-full w-full  object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </div>
          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
        </CardItem>
      </CardBody>
    </CardContainer >

  );
};
export default ProjectCard;
