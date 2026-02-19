"use client";
// import { manrope, mcLaren } from "@/app/layout";
import React from "react";
import { LumiRed } from "../icons/lumi-red";
import AppButton from "../common/app-button";
import { Calendar } from "../icons/calendar";
import { track } from "@vercel/analytics";
import { useBookMeetingModal } from "@/store/useBookingModal";

export const CTASection = () => {
  const { open } = useBookMeetingModal();
  return (
    <section
      className={` py-12 lg:py-24  xl:px-28 lg:px-20 sm:px-12 px-5  flex sm:flex-row flex-col lg:h-[833px] sm:h-[600px] h-full bg-[#E9F4F7] items-center justify-between lg:gap-0 gap-5`}
    >
      <img
        src="/cta.svg"
        alt="schedule image"
        className="object-cover :max-w-[483px]  h-full"
      />
      {/* <div className="sm:max-w-[483px] h-full rounded-[20px] sm:w-[483px] bg-[url('/cta.svg')] bg-cover bg-center"></div> */}
      <div className="xl:w-[530px] lg:w-[400px] flex flex-col">
        <div
          className={`flex gap-2 items-center border border-blue-secondary  rounded-full px-3.5 py-7px mb-2  w-fit`}
        >
          <LumiRed color="#3AC8EE" />
          <span className="text-sm font-semibold text-black">
            LET&apos;S TALK
          </span>
        </div>
        <p
          className={`xl:text-6xl text-4xl font-semibold text-black mb-4 leading-tight `}
        >
          Every Child is Unique – Let&apos;s Find the Right Path
        </p>
        <p className=" mb-8  text-base text-[#4B5563]">
          Want to learn more about how Little Luminaries can help your child
          succeed? Schedule a free consultation with our tutors to discuss your
          child&apos;s learning needs and explore the best program for them.
        </p>
        <AppButton
          className={`w-fit lg:py-[18px] lg:px-8 py-[14px] px-6`}
          icon={<Calendar />}
          text="Book a free consultation"
          onClick={() => {
            open();
            track("buy_clicked", { plan: "hobby" });
          }}
        />
      </div>
    </section>
  );
};
