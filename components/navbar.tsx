import React, {useState, useEffect} from "react"
import Image from "next/image"
import { MenuIcon } from '@heroicons/react/solid';
import "tailwindcss/tailwind.css";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<nav className="flex justify-between items-center p-4 w-full">
  <div className="flex justify-start">
    <Image alt="Kavach Logo" height={100} width={100} src="/kavach.gif" />
  </div>
  {/* Mobile menu button */}
  <div className="md:hidden">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <MenuIcon className="h-6 w-6 text-white" />
    </button>
  </div>
  {/* Navigation links container */}
  <div className="hidden md:flex md:justify-center md:items-center md:w-full">
    <div className="flex justify-around w-full max-w-2xl"> {/* Adjust max-width as needed */}
      <a href="#enterprises" className="text-[#6D6C6A] hover:underline">Enterprises</a>
      <a href="#schools" className="text-[#6D6C6A] hover:underline">Schools</a>
      <a href="#institutes" className="text-[#6D6C6A] hover:underline">Institutes</a>
      <a href="#licensing" className="text-[#6D6C6A] hover:underline">Licensing</a>
      <a href="#plans" className="text-[#6D6C6A] hover:underline">Plans</a>
    </div>
  </div>
  {/* Mobile menu */}
  <div className={`absolute top-0 right-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden w-64 bg-black text-white h-full transition-transform duration-300 ease-in-out`}>
    <div className="flex flex-col justify-start items-start p-4 space-y-4">
      {/* Mobile navigation links, similar to above */}
    </div>
  </div>
</nav>
);   
}