import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import { manrope } from '@/app/layout';
import { ArrowRight } from '../icons/arrow-right';

export const FeaturesSection = () => {
  const features = [
    {
      feat: 'INTERACTIVE CLASSES',
      descript: 'Live, interactive online sessions',
      color: '#F2411F',
      img: '/online.png',
    },
    {
      feat: 'TOTAL FLEXIBILITY',
      descript: 'Flexible schedules from anywhere',
      color: '#FBBA18',
      img: '/flexible.png',
    },
    {
      feat: 'EXPERIENCED TUTORS',
      descript: 'Expert tutors with engaging teaching styles',
      color: '#9FC836',
      img: '/expert.png',
    },
    {
      feat: 'DISTRACTION-FREE',
      descript: 'Safe, distraction-free virtual classrooms',
      color: '#3AC8EE',
      img: '/expert.png',
    },
  ];
  return (
    <section className="lg:py-24 py-12 xl:px-28 lg:px-20 sm:px-12 px-5 flex flex-col bg-[#F5F5F5] items-start  ">
      <div
        className={`flex gap-2 items-center border border-green bg-[#F3FAE1] rounded-full px-3.5 py-7px mb-2 ${manrope.className}`}
      >
        <LumiRed color="#9FC836" />
        <span className="text-sm font-semibold text-black">
          COURSES OFFERED
        </span>
      </div>
      <div className=" flex flex-col gap-14 sm:overflow-auto w-full">
        <p
          className={`xl:text-6xl text-4xl  font-semibold text-black leading-tight `}
        >
          Why Choose Us?
        </p>
        <div className="grid gird-cols-1 md:flex items-center sm:h-[558px] gap-8 sm:overflow-auto w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ backgroundColor: feature.color }}
              className="flex flex-col bg-white rounded-[20px] pt-8 p min-w-[335px] h-full shadow-lg "
            >
              <div className=" flex bg-white  py-1 rounded-[7px] w-fit px-2.5 mx-6">
                <span className="text-black font-semibold  text-sm">
                  {feature.feat}
                </span>
              </div>
              <p
                className={`text-3xl font-semibold leading-relaxed mt-4 mb-10 px-6 ${
                  index / 2 === 0 ? 'text-white' : 'text-black'
                }`}
              >
                {feature.descript}
              </p>
              <div className={`w-full h-full  rounded-[20px] relative`}>
                <img
                  src={feature.img}
                  alt="feature"
                  className="w-full h-full bg-white rounded-[20px] object-cover "
                />
                <button className="absolute bottom-6 left-6 bg-[#FFFFFF]/20 backdrop-blur-lg gap-[18px] flex items-center justify-center p-[4px] rounded-[40px] h-[56px]">
                  <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
                    <ArrowRight />
                  </div>
                  <p className="text-[18px] font-bold text-white pr-4">
                    Enroll now
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
