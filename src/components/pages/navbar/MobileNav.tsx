import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="h-screen flex justify-center items-center" >
        <div className="flex flex-col  justify-center items-center gap-6  ">
          {/* logo */}
          <div>
            <Link href="/">
              <h1 className="text-2xl nameGradient">AHF..</h1>
            </Link>
          </div>
          {/* nav link */}
          <div className="flex flex-col items-center gap-4 ">
            {navItems.map((item) => (
              <Link href={item.path} key={item.name}
                className={`${item.path === pathName && "text-accent border-b-2 border-accent"} capitalize hover:text-accent transition-all`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
