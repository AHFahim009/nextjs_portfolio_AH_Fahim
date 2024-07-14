import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useSwiper } from "swiper/react"

const SliderBtn = () => {
  const swiper = useSwiper()
  return (
    <div className="flex justify-between xl:justify-center w-full absolute z-20 top-1/2 bottom-1/2 xl:static px-2 lg:px-0 xl:mt-4 xl:gap-3 ">
      <button
        className="w-[30px] h-[30px] bg-accent text-primary flex justify-center rounded-lg items-center text-[22px] hover:bg-accent-hover transition-all font-bold"
        onClick={() => swiper.slidePrev()}><PiCaretLeftBold /></button>
      <button
        className="w-[30px] h-[30px] bg-accent text-primary rounded-lg flex justify-center items-center text-[22px] hover:bg-accent-hover transition-all font-bold"
        onClick={() => swiper.slideNext()}><PiCaretRightBold /></button>
    </div>





  )
}
export default SliderBtn