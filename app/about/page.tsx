"use client";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import About1 from "../../components/About";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Calculated delay per character

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b bg-[#f0f5f4]">
        <Navbar />
        <About1 />
        <Service />
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[70px]">
          <div className="container mx-auto">
            <div
              className="flex flex-wrap items-center justify-between 

            "
            >
              <div
                className="w-full px-4 
              "
              >
                <div className=" lg:mt-0">
                  <span className="block mb-4 text-lg font-semibold text-primary">
                    About Us
                  </span>
                  <h2 className="mb-5 text-3xl font-bold text-[#2A8D5C] sm:text-[40px]/[48px]">
                    Empowering Mental Wellness
                  </h2>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    Employing AIaaS, Kavach.me is about evaluating, nourishing
                    and nursing one’s mental health at various levels like
                    school, coachings or tuitions, hostels or boarding schools,
                    institutes and organisations.
                  </p>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    Kavach A.I. offers a confidential, intuitive platform
                    designed to understand and guide people through their
                    challenges. Leveraging advanced AI, we provide personalised
                    support, making mental wellness accessible anytime,
                    anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
