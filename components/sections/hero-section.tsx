import { Avatar, Button, Image } from "@mantine/core";
import React from "react";
import AppButton from "../common/app-button";
import { Contact } from "../icons/contact";
import { Star } from "../icons/star";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="max-h-[894px] xl:pl-28 lg:pl-20 sm:pl-12 px-5  bg-[url('/Hero.png')] bg-cover bg-no-repeat py-[67px] flex items-center justify-between flex-col sm:flex-row gap-10">
      <div className="flex flex-col max-w-[435px]">
        <h1 className="xl:text-6xl text-4xl font-bold text-black xl:eading-[72px] leading-[55px] mb-2 sm:text-start text-center">
          Where Young Minds Shine Bright
        </h1>
        <p className="xl:text-base text-sm font-medium text-black sm:text-start text-center">
          An engaging online tutoring platform helping kids build strong skills
          in Mathematics, English, Coding, and Reading, right from the comfort
          of home.
        </p>
        <div className="flex sm:flex-row flex-col items-center gap-4 mt-7">
          <Link href="#courses">
            <AppButton
              text="Browse courses"
              className="xl:!py-18px !py-3.5 xl:!px-9 !px-4 xl:!text-base !text-sm"
            />
          </Link>
          <a
            href="https://wa.me/4915756993544"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppButton
              icon={<Contact />}
              text="Contact us"
              className="xl:!py-18px !py-3.5 xl:!px-9 !px-4 xl:!text-base !text-sm bg-transparent !text-black border border-black"
            />
          </a>
        </div>
        <div className="flex items-center sm:justify-start justify-center gap-4 mt-7">
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
            <p className="text-xs font-normal">From reviews</p>
          </div>
        </div>
      </div>
      <Image
        src="/kids.png"
        alt="Hero Image"
        className="max-w-[760px] xl:h-[696px] lg:h-[500px] h-[300px] mr-5 !hidden sm:!flex"
      />
    </section>
  );
};
