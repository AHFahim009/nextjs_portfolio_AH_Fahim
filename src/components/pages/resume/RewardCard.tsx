import { CardBody, CardContainer, CardItem } from "@/aceternityUI/3d-card";
import Image from "next/image";
import { useState } from "react";
import image1 from "@/assests/level_one_reward.jpg";
import Link from "next/link";

type TProp = {
  item: {
    image: any;
    details: string;
    viewLink: string;
  };
};

const RewardCard = ({ item }: TProp) => {
  const [expandable, setExpandable] = useState(false);

  const handleExpandable = () => {
    setExpandable((pre) => !pre);
  };
  return (
    <div className="rewardCard">
      <CardContainer className="inter-var ">
        <CardBody className="  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  border  rounded-xl h-auto p-6 w-full ">
          {/* image part */}
          <CardItem translateZ="100" className="xl:h-[300px]">
            <Image
              src={item.image}
              width={1000}
              height={1000}
              className="h-full w-full  rounded-xl object-fill group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
      <div className="rewardInfo">
        {/* title */}
        <h1
          className="text-[20px] font-bold text-white  dark:text-white mt-2  px-[12px]"
        >
          Web Development Certificate
        </h1>
        {/* action part */}
        < div className=" actionBtn flex justify-between items-center mt-2">
          <a href=""

            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Preview
          </a>

          <button
            className="px-3 py-1 rounded-xl bg-accent dark:bg-white dark:text-black text-black text-xs font-bold"
            onClick={handleExpandable}
          >
            {expandable ? "Collapse" : "Details"}
          </button>

        </div>

        {expandable && (
          <div className=" px-[12px] mt-4">
            <p>
              {item.details}{" "}
              <span
                onClick={handleExpandable}
                className="px-3 py-1 rounded-xl bg-accent dark:bg-white dark:text-black text-black text-xs font-bold"
              >
                collapse
              </span>
            </p>
          </div>
        )}
      </div>

    </div >
  );
};
export default RewardCard;
