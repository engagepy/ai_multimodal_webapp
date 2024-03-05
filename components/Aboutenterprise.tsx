import React from "react";
import Image from "next/image";

const About2 = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between flex-col">
            <div className="w-full px-4 lg:w-1/2 xl:w-2/2">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-[#2A8D5C] sm:text-[40px]/[48px] text-center">
                  Invest in your most valuable asset - your mind
                </h2>
                <span className="block w-20 h-1 mx-auto mb-8 bg-[#2A8D5C] rounded-full"></span>
                <p className="mb-8 text-lg text-center text-[#6D6C6A]">
                  Depression interferes with a person’s ability to complete
                  physical job tasks about 20% of the time and reduces cognitive
                  performance about 35% of the time.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center sm:-mx-4 ">
                <div className="w-full px-3 sm:px-4 ">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.thoughtfull.world/hubfs/Thoughtfull_February2023/images/aa039b_9f38689e6d874eeca10375a3c03b7079_mv2.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <p className="mb-8 text-lg text-center text-[#6D6C6A]">
                Only 57% of employees who report moderate depression and 40% of
                those who report severe depression receive treatment to control
                depression symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About2;
