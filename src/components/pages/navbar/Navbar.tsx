"use client"
import Link from "next/link"
import { Button } from "../../ui/button"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Navbar = () => {
  return (
    <header className="py-8 xl:py-5 text-white fixed z-[99] top-0 left-0 right-0 ">
      <div className="container mx-auto flex justify-between  items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl nameGradient">AHF..</h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex gap-8 justify-center items-center">
          <DesktopNav />
          <Link href="/contact">
            <button className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-accent hover:text-accent-hover transition-colors focus:outline-none ">Hire Me</button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
export default Navbar