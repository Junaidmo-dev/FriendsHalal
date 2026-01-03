import Gro from "../../public/images/image.png"
import Image from "next/image"
const CategoryCard = () => {
  return (
    <div className="rounded-xl w-66 h-48 bg-white flex flex-col items-center justify-center p-4 mt-6 mb-10 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <div className="relative w-24 h-24 mb-4 rounded-full  overflow-hidden">
           <Image src={Gro} alt="Category Image" fill className="object-cover" />
        </div>
        <div><h3 className="font-bold text-lg">Halal Meat</h3></div>
    </div>
  ) 
}

export default CategoryCard