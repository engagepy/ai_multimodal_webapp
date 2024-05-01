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
    <div className="min-h-screen bg-gradient-to-b from-[#0A2342] via-[#CB7723] to-[#FFD23F]">

      <Head>
        <title>AI Empowering Next</title>
      </Head>
      <nav className="flex justify-between items-center p-4 w-full">
        <div className="flex justify-start">
          <Image
            alt="ATZ Logo"
            height={150}
            width={150}
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
        {/* <div className="hidden md:flex md:justify-center md:items-center md:w-full">
          <div className="flex justify-around w-full max-w-2xl">
            {" "}
            {/* Adjust max-width as needed */}
            {/*}
            <a href="/about" className="text-white hover:underline">
              About Us
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
        </div> */}
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
          {/* <div className="flex flex-col justify-start items-start px-4 space-y-4">
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
          </div> */}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#efb849]">
          AI Empowering The Next
          <span className="animate-blink text-[#c1fe6c]">_</span>
        </h1>
      </div>
      {/* Main Content */}

      <div className="flex flex-wrap items-start justify-center lg:items-center lg:justify-between p-4">
        <div className="w-full lg:w-2/3 flex flex-col justify-between p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
          <div className="mt-6">
  <h2 className="my-8 text-2xl font-bold text-gray-400 md:text-4xl">
    Why Use A.I.?
  </h2>
  <p className="text-gray-300 mt-2">
    Embrace the future of technology with our comprehensive AIaaS solution. Here are some of the standout features that set us apart:
  </p>
  <br></br>
  <ul className="list-none text-gray-200" >
    <li>✅ <strong>Multi-Modality Interaction:</strong> Seamlessly integrates various forms text, voice, and visual data.</li>
    <li>✅ <strong>Text-to-Voice & Voice-to-Text Capabilities:</strong> Spoken language into text and vice versa.</li>
    <li>✅ <strong>Retrieval Augmented Generation:</strong> Leverage historical data to generate contextually relevant retrieval.</li>
    <li>✅ <strong>Secure Login:</strong> Advanced security protocols to ensure user identity protection and data privacy.</li>
    <li>✅ <strong>GDPR Compliance:</strong> Strictest data protection regulations, handling all data with utmost security.</li>
  </ul>
  
</div>

<div className="mt-6">
  <h2 className="my-8 text-2xl font-bold text-gray-300 md:text-4xl">
    Operational Efficiency with AI ?
  </h2>
  <p className="text-gray-300 mt-2">
    AI technology is revolutionizing how businesses operate, offering unprecedented improvements in efficiency and productivity. By integrating AI solutions, organizations can harness the full potential of digital transformation.
  </p>
  <ul className="mt-4 list-none text-white">
    <li>🕹️ <strong>Automated Decision-Making:</strong> AI algorithms analyze data and make informed decisions rapidly, far surpassing human speed and accuracy.</li>
    <li>📟 <strong>Process Automation:</strong> From routine tasks to complex operations, AI streamlines workflows, freeing up human resources for strategic activities.</li>
    <li>🛂 <strong>Enhanced Customer Interactions:</strong> AI-driven tools personalize customer experiences, responding in real-time to customer inquiries and needs.</li>
    <li>🌍 <strong>Scalable Innovations:</strong> AI adapts and scales according to organizational needs, ensuring sustainable growth and agility in rapidly changing markets.</li>
    <li>💰 <strong>Cost Reduction:</strong> By automating tasks and optimizing systems, AI significantly reduces operational costs, delivering a better return on investment.</li>
  </ul>
  <p className="text-gray-100 mt-4">
    As industries evolve, the integration of AI is becoming not just advantageous but essential. Organizations adopting AI are setting new standards in efficiency, paving the way for future innovations and market leadership.
  </p>
</div>

        </div>

        {/* Adjusted SignIn box */}
        <div className="flex w-full lg:w-1/3 justify-center p-4">
          <div className="w-full max-w-xs mx-auto">
            <h2 className="text-xl font-bold text-white mb-4">
              Explore Our Healthcare AI Demo
            </h2>
            <SignIn />
            
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
      <div className="mt-6">
  <h3 className="my-4 text-xl font-bold text-gray-100 md:text-3xl text-center">
    AI Efficiency in Organizational Settings
  </h3>
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs uppercase text-white bg-[#0A2342]">
      <tr>
        <th scope="col" className="py-3 px-6">
          Feature
        </th>
        <th scope="col" className="py-3 px-6">
          Benefit
        </th>
        <th scope="col" className="py-3 px-6">
          Impact
        </th>
      </tr>
    </thead>
    <tbody>
    <tr className="bg-[#CB7723] border-b border-gray-700">
  <td className="py-4 px-6 text-white">
    Multi-Modality Interaction
  </td>
  <td className="py-4 px-6 text-white">
    Improves engagement through diverse communication methods
  </td>
  <td className="py-4 px-6 text-white">
    Increases user satisfaction and accessibility
  </td>
</tr>
<tr className="bg-[#CB7723] border-b border-gray-700">
  <td className="py-4 px-6 text-white">
    Automated Responses
  </td>
  <td className="py-4 px-6 text-white">
    Reduces response time to student inquiries
  </td>
  <td className="py-4 px-6 text-white">
    Enhances efficiency, allowing staff to focus on critical tasks
  </td>
</tr>
<tr className="bg-[#CB7723] border-b border-gray-700">
  <td className="py-4 px-6 text-white">
    Data-driven Insights
  </td>
  <td className="py-4 px-6 text-white">
    Provides analytics for informed decision-making
  </td>
  <td className="py-4 px-6 text-white">
    Improves outcomes through targeted educational strategies
  </td>
</tr>
<tr className="bg-[#CB7723] border-b border-gray-700">
  <td className="py-4 px-6 text-white">
    GDPR Compliance
  </td>
  <td className="py-4 px-6 text-white">
    Ensures data privacy and security
  </td>
  <td className="py-4 px-6 text-white">
    Builds trust and compliance with international standards
  </td>
</tr>

    </tbody>
  </table>
</div>

    </div>
  );
}
