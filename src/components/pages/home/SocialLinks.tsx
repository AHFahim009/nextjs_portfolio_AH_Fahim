import { socialLinks } from "@/data/data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      {socialLinks.map((item) => (
        <Link
          href={item.path}
          key={item.path}
          className="border border-accent rounded-full w-9 h-9 flex justify-center items-center text-base text-accent
          hover:bg-accent-hover hover:text-primary hover:transition-all
          duration-500
          "
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};
export default SocialLinks;
