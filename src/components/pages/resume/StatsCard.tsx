import CountUp from "react-countup"

type TProp = {
  duration: number;
  subject: string;
};

const StatsCard = ({ duration, subject }: TProp) => {
  return (
    <div className="flex xl:flex-1 items-center xl:justify-start gap-3 ">
      <CountUp
        end={duration}
        delay={2}
        duration={5}
        className="text-4xl font-extrabold"
      ></CountUp>
      <p className="leading-snug text-white/80 max-w-[150px] text-left">
        {subject}
      </p>
    </div>
  );
};
export default StatsCard;
