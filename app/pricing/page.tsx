"use client";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Service, { ServiceCard } from "../../components/Service";
import About2 from "../../components/Aboutenterprise";
import Accordion from "../../components/Accordianenterprise";
import Pricing from "../../components/Pricingenterprise";
import React from "react";
import Navbar from "../../components/Navbar";

const PricingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // Calculated delay per character

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b bg-[#f0f5f4]">
        <Navbar />

        <Pricing />
      </div>
    </>
  );
};

export default PricingPage;
