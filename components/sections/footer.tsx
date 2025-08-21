"use client";
import React from "react";
import { Phone } from "../icons/phone";
import { Divider } from "@mantine/core";
import { Email } from "../icons/email";
import Image from "next/image";
import { list } from "../navbar";
import Link from "next/link";
import AppButton from "../common/app-button";
import { Instagram } from "../icons/instagram";
import { EmailIcon } from "../icons/email-icon";

export const Footer = () => {
  return (
    <footer className=" flex flex-col bg-[url('/Footer.png')] bg-cover bg-no-repeat text-white ">
      <div className="border-b border-white/30 flex sm:flex-row flex-col items-center sm:gap-[60px] xl:px-[100px] lg:px-20 md:px-12 px-5">
        <div className="flex items-center border-b-[0.5px] border-white/30 sm:border-0 w-full sm:justify-center gap-4 sm:py-16 py-6 ">
          <div className="border border-white/25 rounded-full sm:p-[18px] p-[14px] bg-white/5">
            <Phone />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-orange xl:text-base text-sm">Phone:</p>
            <p className="xl:text-xl text-base font-medium text-white">
              (+234) 8057808308
            </p>
            <p className="xl:text-xl text-base font-medium text-white">
              (+49) 15756993544
            </p>
          </div>
        </div>
        <Divider
          orientation="vertical"
          color="#FFFFFF3D"
          className="h-full  "
        />{" "}
        <div className="flex items-center sm:justify-center w-full gap-4  sm:py-16 py-6 ">
          <div className="border border-white/30 rounded-full sm:p-[18px] p-[14px] bg-white/5">
            <Email />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-blue-secondary xl:text-base text-sm">Email:</p>
            <p className="font-medium text-white xl:text-xl text-base ">
              littleluminarieslearning@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="py-[50px] flex md:flex-row flex-col md:items-center  items-start md:justify-between justify-center xl:px-[100px] lg:px-20 md:px-12 px-5  ">
        <Image
          width={170}
          height={40}
          alt="logo"
          src="/luminaries-white-logo.svg"
          className="w-[clamp(100px,15vw,170px)] sm:mb-0 mb-8"
        />
        <ul className=" sm:items-center gap-8 sm:gap-3 flex md:flex-row flex-col  sm:mb-0 mb-8">
          {list.map(({ id, name, link }) => (
            <Link
              key={id}
              href={link}
              className="px-2 py-[5px] xl:text-lg text-base"
            >
              {name}
            </Link>
          ))}
        </ul>
        <AppButton text="Book a meeting" />
      </div>
      <div className="p-px bg-gradient-to-r from-[#FFFFFF00] from-5%  via-[#FFFFFF3D] via-20%  to-[#FFFFFF00] h-[0.5px]"></div>
      <div className="xl:px-[100px] lg:px-20 md:px-12 px-5 sm:py-10 py-6 flex sm:flex-row flex-col sm:items-center justify-between sm:gap-0 gap-5">
        <span className="xl:text-sm text-xs">
          © 2025 Little Luminaries. All rights reserved.
        </span>
        <ul className="flex items-center gap-5 ">
          <a
            href=""
            target="_blank"
            className="border-[0.5px] border-gray-200 rounded-full p-1 bg-white/5"
          >
            <Instagram />
          </a>
          <a
            href=""
            target="_blank"
            className="border-[0.5px] border-gray-200 rounded-full p-1 bg-white/5"
          >
            <EmailIcon />
          </a>
        </ul>
      </div>
    </footer>
  );
};
