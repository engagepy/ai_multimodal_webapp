"use client";

import React from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b bg-[#f0f5f4]">
        <Navbar />
        <section className="relative  overflow-hidden  py-20 dark:bg-dark lg:py-[120px]">
          <div className=" flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-[#2A8D5C] sm:text-4xl md:text-[40px]">
                  Get in touch with us
                </h2>
                <p
                  className="text-base
                mb-8
                text-lg
                text-center
                text-[#6D6C6A] 
              "
                >
                  We are here to help you. If you have any queries, feel free to
                  contact us. We will get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap lg:justify-between w-full max-w-[600px] mx-auto px-4  lg:px-0">
              <div className="w-full px-4  lg:px-0">
                <div className="relative rounded-lg p-8 shadow-lg bg-white sm:p-12">
                  <form>
                    <ContactInputBox
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <ContactInputBox
                      type="text"
                      name="email"
                      placeholder="Your Email"
                    />
                    <ContactInputBox
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                    />
                    <ContactTextArea
                      row={4}
                      placeholder="Your Message"
                      name="details"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90 
                        bg-[#2A8D5C] dark:bg-dark-3 dark:border-dark-3 dark:text-dark-6"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};
