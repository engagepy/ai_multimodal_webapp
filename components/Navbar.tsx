import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Kavach A.I. - Empowering Mental Wellness</title>
      </Head>
      <nav className="flex justify-between items-center p-4 w-full bg-gray-800 p-4 z-10">
        <div className="flex justify-start">
          <Link href="/">
            <Image
              alt="Kavach Logo"
              height={100}
              width={100}
              src="/green_logo.png"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="hidden md:flex md:justify-center md:items-center md:w-full">
          <div className="flex justify-around w-full max-w-2xl">
            {" "}
            <a href="/about" className="text-white hover:underline">
              About Us
            </a>
            <a href="/enterprises" className="text-white hover:underline">
              Enterprises
            </a>
            <a href="/institutes" className="text-white hover:underline">
              Educational Institutes
            </a>
            <a href="/pricing" className="text-white hover:underline">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:underline">
              Contact
            </a>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full "
          } md:hidden  w-64 bg-gray-800 text-white h-full z-10 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4 flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-4 pb-6">
            <Link href="/">
              <Image
                src="/green_logo.png"
                alt="Logo"
                width={100}
                height={100}
                layout="fixed"
              />
            </Link>
          </div>
          <div
            className="flex flex-col justify-start items-start px-4 space-y-4
          
          "
          >
            <a href="/about" className="text-white hover:underline">
              About
            </a>
            <a href="/enterprises" className="text-white hover:underline">
              Enterprises
            </a>
            <a href="/institutes" className="text-white hover:underline">
              Institutes
            </a>
            <a href="/pricing" className="text-white hover:underline">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
