import { Avatar, Button, Image } from '@mantine/core';
import React from 'react';
import AppButton from '../common/app-button';
import { Contact } from '../icons/contact';
import { Star } from '../icons/star';

export const HeroSection = () => {
  return (
    <section className="max-h-[894px] pl-28 bg-[#FFF8F0] py-[67px] flex items-center justify-between flex-col sm:flex-row gap-10">
      <div className="flex flex-col max-w-[435px]">
        <h1 className="text-6xl font-bold text-black leading-[72px] mb-2">
          Where Young Minds Shine Bright
        </h1>
        <p className="text-base font-medium text-black">
          An engaging online tutoring platform helping kids build strong skills
          in Mathematics, English, Coding, and Reading, right from the comfort
          of home.
        </p>
        <div className="flex items-center gap-4 mt-7">
          <AppButton text="Browse courses" className="py-18px px-9" />
          <AppButton
            icon={<Contact />}
            text="Contact us"
            className="py-18px px-9 bg-transparent !text-black border border-black"
          />
        </div>
        <div className="flex items-center gap-4 mt-7">
          <div className=" flex items-center">
            <Avatar size={40} />
            <Avatar size={40} className="-ml-5" />
            <Avatar size={40} className="-ml-5" />
            <Avatar size={40} className="-ml-5" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-sm font-normal">5.0</p>
            </div>
            <p className="text-xs font-normal">From 100+ reviews</p>
          </div>
        </div>
      </div>
      <Image
        src="/kids.png"
        alt="Hero Image"
        className="max-w-[760px] h-[696px] mr-5"
      />
    </section>
  );
};
