"use client";

import { SignUp } from "@clerk/nextjs";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Features from "../../../components/features";
import Mapping from "../../../components/mapping";
import React, { useState, useEffect } from "react";

export default function EnterpriseLandingPage() {
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#111111] via-[#222222] to-[#333333]">
      <Head>
        <title>AI Empowering Next</title>
      </Head>
      <nav className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center">
          <a href="https://astratechz.com">
            <Image alt="ATZ Logo" height={55} width={55} src="/atz_logo.png" />
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://github.com/engagepy/ai_multimodal_webapp">
            <Image alt="Github Logo" height={50} width={50} src="/github-mark-white.png" />
          </a>
        </div>
      </nav>

      <div className="text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#a7c7e7] via-[#5271c4] to-[#103fef]">
          AI Empowering The Next
          <span className="animate-blink text-[#103fef]">_</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between p-4 max-w-full">
        <div className="w-full lg:w-2/3 flex flex-col justify-between p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
            <path
              fillRule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clipRule="evenodd"
            />
          </svg>
          <div className="mt-6">
            <h2 className="my-8 text-2xl font-bold text-[#5271c4] md:text-4xl">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-br text-white">Use AI ?</span>
            </h2>
            <p className="text-gray-300 mt-2">
              Imagine a small bookstore where AI-driven recommendations help customers discover books that feel personally curated for their tastes, or a coffee shop where AI optimizes inventory based on predictive analytics of buying patterns. Picture a manufacturing plant where AI enhances efficiency, predicting maintenance issues before they occur, or a healthcare provider where AI algorithms predict patient health risks with astonishing accuracy.
            </p>
            <br />
            <ul className="list-none text-gray-200">
              <li>✅ <strong>Multi-Modality Interaction:</strong> Seamlessly integrates various forms text, voice, and visual data.</li>
              <li>✅ <strong>Retrieval Augmented Generation:</strong> Leverages historical data to generate contextually relevant content.</li>
              <li>✅ <strong>GDPR Compliance:</strong> Meets the strictest data protection regulations, handling all data with confidentiality.</li>
              <li>✅ <strong>Real-Time Analytics:</strong> Provides immediate insights into user behavior and system performance.</li>
              <li>✅ <strong>Automated Customer Support:</strong> Offers 24/7 customer service with instant, automated responses to inquiries.</li>
              <li>✅ <strong>Integration Capabilities:</strong> Easily integrates with existing platforms and software, minimizing disruption.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="my-8 text-2xl font-bold text-[#5271c4] md:text-4xl">
              Operational <span className="text-transparent bg-clip-text bg-gradient-to-br text-white">AI Efficiency </span>
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

        <div className="flex justify-center items-center w-full lg:w-1/3 p-4 lg:pt-24 order-first lg:order-last">
          <div className="w-full max-w-xs">
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Explore Our Healthcare AI Demo
            </h2>
            <div className="flex justify-center">
              <SignUp />
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Mapping />
    </div>
  );
}
