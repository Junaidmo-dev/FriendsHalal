import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav>
      <section className="p-6 flex items-center  gap-8">
        <h1 className="font-heading text-xl font-bold cursor-pointer">Friends Halal</h1>
        <div className="relative text-green-700">
          <CiSearch className="text-2xl absolute left-2 top-1/2 transform -translate-y-1/2" />
          <input type="text"
          placeholder="Search...."
          className="border border-gray-300 rounded-md pl-10 py-2 focus:outline-none w-200" 
          />
        </div>
        <div className="flex gap-4 ml-auto font-bold cursor-pointer" ><h1>Meat</h1>
        <h1>Produce</h1>
        <h1>Pantry</h1>
        <h1>Frozen</h1></div>
        <div className="gap-3.5 flex items-center">
          <div className="p-2 bg-white border border-gray-400 rounded-xl"> 
          <IoPersonOutline className="text-2xl cursor-pointer"/>
        </div>
        <div className="p-2 bg-green-600 rounded-xl">
          <IoMdCart  className="text-2xl cursor-pointer "/>
        </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar