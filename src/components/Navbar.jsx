import ArrowDown from "./icons/ArrowDown";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import Desktop from "./icons/Desktop";

export default function Navbar() {
  return (
    <nav className="group relative">
      <button className="text-[10px] cursor-pointer flex flex-col items-center px-4">
        Menu
        <ArrowDown />
      </button>

      <ul className="list-none absolute  font-bold text-xs w-34.75 hidden group-hover:block -left-10">
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg mt-6">
          <a href="#" className="w-full h-full text-center py-1">
            Home
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            Power Of Radium
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            My Second Nobel
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            X-Rays
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            Strength
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            First Women
          </a>
        </li>
        <li className="bg-secondary-bg my-1.5 rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg">
          <a href="#" className="w-full h-full text-center py-1">
            Contact Me
          </a>
        </li>
        <li className="flex justify-between gap-2.25 ">
          <button className="bg-secondary-bg rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg cursor-pointer">
            <Sun className="py-1" />
          </button>
          <button className="bg-secondary-bg rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg cursor-pointer">
            <Moon className="py-1" />
          </button>
          <button className="bg-secondary-bg rounded-[5px] w-full flex justify-center items-center hover:bg-red-bg cursor-pointer">
            <Desktop className="py-1" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
