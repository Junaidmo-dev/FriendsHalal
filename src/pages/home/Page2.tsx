import CategoryCard from "@/components/CategoryCard"
import { MdOutlineNavigateNext } from "react-icons/md";

const Page2 = () => {
  return (
    <main className="h-screen ">
         <div className="ml-15 font-black text-2xl mt-10">
            <div className="flex justify-between max-w-348">
                <h1>Shop By Category</h1>
            <div className="flex items-center justify-center gap-1 text-[#00c452] cursor-pointer hover:text-black">
                <h3 className="text-base">View All</h3><MdOutlineNavigateNext />
            </div>
            </div>
            <div className="flex gap-4 mt-6 flex-wrap">
            
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/> 
            </div>
         </div>
    </main>
  )
}

export default Page2