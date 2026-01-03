import Image from "next/image"
import veg from "../../../public/images/leafy.jpg"
import { GrLinkNext } from "react-icons/gr";

const landingpage = () => {
  return (
    <main>
      <div className="relative w-[1400px] h-[550px] rounded-2xl overflow-hidden flex mx-auto mt-8">
  <Image
    src={veg}
    alt="Hero Image"
    fill
    className="object-cover"
  />
  <div className="absolute flex font-bold top-12 left-12 gap-6">
    <h2 className="px-4 bg-[#124628] border border-[#13EC6D] rounded-full text-[#13EC6D]">Now Delivering</h2>
    <h2 className="text-white px-4 bg-[#212C26] rounded-full">Detroit area</h2>
  </div>
  <div className="absolute text-4xl md:text-6xl font-extrabold text-[#ffffff] top-1/3 left-12 leading-tighter">
    Fresh Halal. <br />
    Delivered to Your <br /> <span className="text-[#13EC6D]">Doorstep.</span> 
    <div className="absolute mt-5 text-lg font-normal text-white">
    <p>Your neighbourhood grocery now online.<br/> Premium Meat,Fresh Produce and pantry staples you trust.</p>
  </div>
  </div>
  <button className="absolute bottom-12 left-12 bg-[#13EC6D] text-[#000000] px-8 py-3 rounded-xl font-bold hover:bg-[#168f48] transition-all duration-500 ease-out hover:text-white flex items-center gap-2">Shop Now <GrLinkNext /> </button>
  <button className="px-8 py-3 rounded-lg 
               bg-white/20 
               backdrop-blur-sm 
               border border-white/30 
               transition-all duration-500 ease-out
               text-white font-semibold absolute bottom-12 left-60 hover:bg-white hover:text-black ">
  View Weekly Ads
</button>

</div>

    </main>
  )
}

export default landingpage