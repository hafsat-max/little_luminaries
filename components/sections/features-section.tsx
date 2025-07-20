import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import { manrope } from '@/app/layout';

export const FeaturesSection = () => {
  const features = [
    {
      feat: 'INTERACTIVE CLASSES',
      descript: 'Live, interactive online sessions',
      color: '#F2411F',
    },
    {
      feat: 'TOTAL FLEXIBILITY',
      descript: 'Flexible schedules from anywhere',
      color: '#FBBA18',
    },
    {
      feat: 'EXPERIENCED TUTORS',
      descript: 'Expert tutors with engaging teaching styles',
      color: '#9FC836',
    },
    {
      feat: 'DISTRACTION-FREE',
      descript: 'Safe, distraction-free virtual classrooms',
      color: '#3AC8EE',
    },
  ];
  return (
    <section className="py-24 px-[120px] flex flex-col bg-linear-to-b from-[#F5F5F5] to-white items-start">
      <div
        className={`flex gap-2 items-center border border-green bg-[#F3FAE1] rounded-full px-3.5 py-7px mb-2 ${manrope.className}`}
      >
        <LumiRed color="#9FC836" />
        <span className="text-sm font-semibold text-black">
          COURSES OFFERED
        </span>
      </div>
      <div className=" flex flex-col gap-14">
        <p className={`text-6xl font-semibold text-black leading-tight `}>
          Why Choose Us?
        </p>
        <div className="flex items-center h-[558px] gap-8 overflow-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              style={{ backgroundColor: feature.color }}
              className="flex flex-col bg-white rounded-[20px] py-8 px-6 w-[382px] h-full shadow-lg "
            >
              <div className=" flex bg-white px-2.5 py-1 rounded-[7px] w-fit mb-5">
                <span className="text-black font-semibold  text-sm">
                  {feature.feat}
                </span>
              </div>
              <p 
                className={`text-3xl font-semibold leading-relaxed mt-4 mb-10 ${
                  index / 2 === 0 ? 'text-white' : 'text-black'
                }`}
              >
                {feature.descript}
              </p>
              <div className='w-full h-full bg-white rounded-[20px]'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
