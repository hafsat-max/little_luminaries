'use client';
import React from 'react';
import { Phone } from '../icons/phone';
import { Divider } from '@mantine/core';
import { Email } from '../icons/email';
import Image from 'next/image';
import { list } from '../navbar';
import Link from 'next/link';
import AppButton from '../common/app-button';
import { Instagram } from '../icons/instagram';
import { EmailIcon } from '../icons/email-icon';

export const Footer = () => {
  return (
    <footer className=" flex flex-col bg-[#000] text-white ">
      <div className="border-b border-[#F4F4F480] flex items-center gap-[60px] px-[100px]">
        <div className="flex items-center w-full justify-center gap-4  py-16 ">
          <div className="border border-[#FFFFFF3D] rounded-full p-18px bg-[#FFFFFF0D]">
            <Phone />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-orange text-base">Phone:</p>
            <p className="text-xl font-medium text-white">(234) 701 459 2427</p>
          </div>
        </div>
        <Divider
          orientation="vertical"
          color="#FFFFFF3D"
          className="h-full  "
        />{' '}
        <div className="flex items-center justify-center w-full gap-4  py-16 ">
          <div className="border border-[#F4F4F480] rounded-full p-18px bg-[#FFFFFF0D]">
            <Email />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-blue-secondary text-base">Email:</p>
            <p className="text-xl font-medium text-white">
              abiodunbusari@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="py-[50px] flex items-center justify-between px-[100px]">
        <Image
          width={170}
          height={40}
          alt="logo"
          src="/luminaries-white-logo.svg"
          className="w-[clamp(100px,15vw,170px)]"
        />
        <ul className="hidden items-center gap-8 sm:gap-3 md:flex">
          {list.map(({ id, name, link }) => (
            <Link key={id} href={link} className="px-2 py-[5px] text-lg">
              {name}
            </Link>
          ))}
        </ul>
        <AppButton text="Book a meeting" />
      </div>
      <div className="p-px bg-gradient-to-r from-[#FFFFFF00] from-5%  via-[#FFFFFF3D] via-20%  to-[#FFFFFF00] h-[0.5px]"></div>
      <div className="px-[100px] py-10 flex items-center justify-between">
        <span className="text-sm">
          © 2025 Little Luminaries. All rights reserved.
        </span>
        <ul className="flex items-center gap-5 ">
          <a href="" target="_blank">
            <Instagram />
          </a>
          <a href="" target="_blank">
            <EmailIcon />
          </a>
        </ul>
      </div>
    </footer>
  );
};
