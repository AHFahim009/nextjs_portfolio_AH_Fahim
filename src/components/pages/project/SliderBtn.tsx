import { log } from "console"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useSwiper } from "swiper/react"

const SliderBtn = () => {
  const swiper = useSwiper()
  const isBeginning = swiper.isBeginning
  const isEnd = swiper.isEnd


  return (
    <div className="flex justify-between xl:justify-center w-full absolute z-20 top-1/2 bottom-1/2 xl:static px-2 lg:px-0 xl:mt-4 xl:gap-3 ">
      <button

        className={`w-[30px] h-[30px] ${isBeginning ? "bg-gray-500" : "bg-accent"} text-primary flex justify-center rounded-lg items-center text-[22px] ${!isBeginning && "hover:bg-accent-hover "}   transition-all font-bold`}
        onClick={() => swiper.slidePrev()}><PiCaretLeftBold /></button>
      <button
        className={`w-[30px] h-[30px] ${isEnd ? "bg-gray-500" : "bg-accent"} text-primary flex justify-center rounded-lg items-center text-[22px] ${!isEnd && "hover:bg-accent-hover "}   transition-all font-bold`}
        onClick={() => swiper.slideNext()}><PiCaretRightBold /></button>
    </div>





  )
}
export default SliderBtn