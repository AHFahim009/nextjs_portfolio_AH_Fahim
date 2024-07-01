"use client"
import { navItems } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathName = usePathname()
  console.log(pathName);

  return (
    <div className="flex gap-8">
      {navItems.map((item) => (
        <Link href={item.path} key={item.name}
          className={`${item.path === pathName && "text-accent border-b-2 border-accent"} capitalize hover:text-accent transition-all`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
export default DesktopNav;
