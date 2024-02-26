"use client";

import { SignIn } from "@clerk/nextjs";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Features from "../../../components/features";
import { MenuIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

export default function EnterpriseLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "A.I. Empowering the Next Generation";
  const typingDelay = 1000 / fullText.length; // Calculated delay per character

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, typingDelay);

    return () => clearInterval(intervalId);
  }, [fullText, typingDelay]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A3EE98] via-[#FFBBF4] to-[#E9FC88]">
      <Head>
        <title>Kavach A.I. - Empowering Mental Wellness</title>
      </Head>
      <nav className="flex justify-between items-center p-4 w-full">
        <div className="flex justify-start">
          <Image
            alt="Kavach Logo"
            height={100}
            width={100}
            src="/green_logo.png"
          />
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        {/* Navigation links container */}
        <div className="hidden md:flex md:justify-center md:items-center md:w-full">
          <div className="flex justify-around w-full max-w-2xl">
            {" "}
            {/* Adjust max-width as needed */}
            <a href="/" className="text-black hover:underline">
              Home
            </a>
            <a href="/about" className="text-black hover:underline">
              About Us
            </a>
            <a href="/enterprises" className="text-black hover:underline">
              Enterprises
            </a>
            <a href="/institutes" className="text-black hover:underline">
              Educational Institutes
            </a>
          </div>
        </div>
        {/* Mobile menu */}
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
          {/* Logo aligned left with padding below */}
          <div className="px-4 pb-6">
            <Image
              src="/green_logo.png"
              alt="Logo"
              width={100}
              height={100}
              layout="fixed"
            />
          </div>
          <div className="flex flex-col justify-start items-start px-4 space-y-4">
            <a href="/" className="text-white hover:underline">
              Home
            </a>
            <a href="/about" className="text-white hover:underline">
              About
            </a>
            <a href="/enterprises" className="text-white hover:underline">
              Enterprises
            </a>
            <a href="/institutes" className="text-white hover:underline">
              Institutes
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#6D6C6A]">
          A.I. Empowering the Next Generation
          <span className="animate-blink text-[#a66cfe]">|</span>
        </h1>
      </div>
      {/* Main Content */}

      <div className="flex flex-wrap items-start justify-center lg:items-center lg:justify-between p-4">
        <div className="w-full lg:w-2/3 flex flex-col justify-between p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
          <div className="mt-6">
            <h2 className="my-8 text-2xl font-bold text-gray-700 md:text-4xl">
              Why Kavach A.I.?
            </h2>
            <p className="text-[#3C3B39] mt-2">
              With rising mental health issues among young minds, Kavach A.I.
              offers a confidential, intuitive platform designed to understand
              and guide students through their challenges. Leveraging advanced
              AI, we provide personalized support, making mental wellness
              accessible anytime, anywhere.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="my-8 text-2xl font-bold text-gray-700 md:text-4xl">
              The Need for Support
            </h2>
            <p className="text-[#3C3B39] mt-2">
              Over 20% of children and adolescents globally face mental health
              challenges, yet less than 15% receive the help they need. Kavach
              A.I. aims to fill this gap, offering a safe space for expression
              and growth.
            </p>
          </div>
        </div>

        {/* Adjusted SignIn box */}
        <div className="flex w-full lg:w-1/3 justify-center p-4">
          <div className="w-full max-w-xs">
            <h2 className="text-xl font-bold text-[#3C3B39] mb-4">
              Sign In to Your Account
            </h2>
            <SignIn />
            <p className="text-center text-sm text-[#3C3B39] mt-4">
              Join us in making mental wellness accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </div>
  );
}
