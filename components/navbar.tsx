"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HamburgerIcon } from "./icons/hamburger-icon";
import { Drawer, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const list = [
    {
      name: "About",
      id: 1,
      link: "#about",
    },
    { name: "Courses", id: 2, link: "#testimonials" },
    { name: "Features", id: 3, link: "#testimonials" },
    { name: "Testimonials", id: 4, link: "#features" },
  ];
  return (
    <div className="flex items-center px-4 justify-between py-4 bg-white-70">
      <Image
        width={170}
        height={40}
        alt="logo"
        src="/luminaries-logo.svg"
        className="w-[clamp(100px,1vw,170px)]"
      />

      <ul className="hidden items-center gap-8 sm:gap-3 md:flex">
        {list.map(({ id, name, link }) => (
          <Link key={id} href={link} className="px-2 py-[5px]">
            {name}
          </Link>
        ))}
      </ul>
      <button className="bg-red-primary text-white py-9px px-18px rounded-full hidden md:block">
        Book a meeting
      </button>
      <div className="md:hidden flex">
        <Drawer opened={opened} onClose={close} title="Authentication">
          <HamburgerIcon />
        </Drawer>

        <Button variant="default" onClick={open}>
          Open Drawer
        </Button>
      </div>
    </div>
  );
};
