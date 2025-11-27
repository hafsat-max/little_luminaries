"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HamburgerIcon } from "./icons/hamburger-icon";
import { Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppButton from "./common/app-button";
import { Multiply } from "./icons/multiply";
import { useBookMeetingModal } from "@/store/useBookingModal";

export const list = [
  {
    name: "About",
    id: 1,
    link: "#about",
  },
  { name: "Courses", id: 2, link: "#courses" },
  { name: "Features", id: 3, link: "#features" },
  { name: "Testimonials", id: 4, link: "#testimonials" },
];

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { active, toggle } = useBookMeetingModal((state) => state);

  return (
    <>
      <div className="flex items-center xl:px-28 lg:px-20 sm:px-16 px-5  justify-between py-4 bg-white-70 ">
        <Image
          width={170}
          height={40}
          alt="logo"
          src="/luminaries-logo.svg"
          className="w-[clamp(100px,1vw,170px)]"
        />

        <ul className="max-[770px]:hidden flex items-center gap-8 sm:gap-3">
          {list.map(({ id, name, link }) => (
            <li key={id}>
              <Link href={link} className="px-2 py-[5px] xl:text-lg text-base">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <AppButton
          className="flex max-[770px]:hidden"
          text="Book a meeting"
          onClick={() => {
            toggle();
          }}
        />

        <div className="hidden max-[770px]:flex">
          <Drawer
            opened={opened}
            onClose={close}
            withCloseButton={false}
            classNames={{
              body: "!p-0 !h-full",
            }}
          >
            <div className="flex flex-col h-full">
              <div className=" flex justify-between items-center py-6 border-b-[0.5px] border-[#E4E7EC] px-5">
                <Image
                  width={170}
                  height={40}
                  alt="logo"
                  src="/luminaries-logo.svg"
                  className="w-[clamp(136px,1vw,170px)]"
                />
                <div className="cursor-pointer" onClick={close}>
                  <Multiply />
                </div>
              </div>
              <ul className="flex-1">
                {list.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      href={link}
                      className="flex justify-between items-center py-6 border-b-[0.5px] border-[#E4E7EC] px-5 xl:text-lg text-base"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>

              <AppButton
                onClick={() => {
                  console.log("Fixes here");
                }}
                className="w-full"
                text="Book a meeting"
              />
            </div>
          </Drawer>

          <button className="" onClick={open}>
            <HamburgerIcon />
          </button>
        </div>
      </div>
    </>
  );
};
