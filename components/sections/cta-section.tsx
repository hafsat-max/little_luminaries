import { manrope, mcLaren } from '@/app/layout';
import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import AppButton from '../common/app-button';
import { Calendar } from '../icons/calendar';

export const CTASection = () => {
  return (
    <section
      className={`py-24 px-[120px] flex h-[833px] bg-[#E9F4F7] items-center justify-between ${manrope.className}`}
    >
      <div className="max-w-[483px] h-full rounded-[20px] w-full bg-red-300"></div>
      <div className="w-[530px] flex flex-col">
        <div
          className={`flex gap-2 items-center border border-blue-secondary  rounded-full px-3.5 py-7px mb-2 $ w-fit`}
        >
          <LumiRed color="#3AC8EE" />
          <span className="text-sm font-semibold text-black">LET’S TALK</span>
        </div>
        <p className={`text-6xl font-semibold text-black mb-4 leading-tight `}>
          Every Child is Unique – Let’s Find the Right Path
        </p>
        <p className=" mb-8  text-base text-[#4B5563]">
          Want to learn more about how Little Luminaries can help your child
          succeed? Schedule a free consultation with our tutors to discuss your
          child’s learning needs and explore the best program for them.
        </p>
        <AppButton
          className={`w-fit ${mcLaren.className} py-[18px] px-8`}
          icon={<Calendar />}
          text="Book a free consultation"
        />
      </div>
    </section>
  );
};
