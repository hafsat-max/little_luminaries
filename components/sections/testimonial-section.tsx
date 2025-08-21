import { manrope } from "@/app/layout";
import React from "react";
import { LumiRed } from "../icons/lumi-red";
import { QuoteUp } from "../icons/quote-up";

export const TestimonialSection = () => {
  const testionials = [
    {
      name: "Mrs A.",
      review:
        "Little Luminaries has transformed my child's learning experience! The tutors are engaging and make learning fun.",
      relationship: "Parent",
    },
    {
      name: "David O.",
      review:
        "The tutors make learning so much fun! My daughter looks forward to every session",
      relationship: "Parent",
    },
    {
      name: "Emma (8 y/o)",
      review:
        "I never thought I’d enjoy reading, but now it’s my favorite part of the day!",
      relationship: "Student",
    },
    {
      name: "Mrs M.I",
      review:
        'My son struggled with math before joining Little Luminaries. Now, he loves it and feels so much more confident!"',
      relationship: "Parent",
    },
    // {
    //   name: "John Doe",
    //   review:
    //     "Little Luminaries has transformed my child's learning experience! The tutors are engaging and make learning fun.",
    //   relationship: "Parent",
    // },
    // {
    //   name: "David O.",
    //   review:
    //     "The tutors make learning so much fun! My daughter looks forward to every session",
    //   relationship: "Parent",
    // },
    // {
    //   name: "Emma (8 y/o)",
    //   review:
    //     "I never thought I’d enjoy reading, but now it’s my favorite part of the day!",
    //   relationship: "Student",
    // },
    // {
    //   name: "David O.",
    //   review:
    //     'My son struggled with math before joining Little Luminaries. Now, he loves it and feels so much more confident!"',
    //   relationship: "Parent",
    // },
  ];
  const bgColors = [
    { bg: "#FAE5E1", color: "#F2411F" },
    { bg: "#FAF3E1", color: "#FBBA18" },
    { bg: "#F3FAE1", color: "#9FC836" },
    { bg: "#E1F5FA", color: "#3AC8EE" },
    { bg: "#F3FAE1", color: "#9FC836" },
    { bg: "#E1F5FA", color: "#3AC8EE" },
    { bg: "#FAE5E1", color: "#F2411F" },
    { bg: "#FAF3E1", color: "#FBBA18" },
  ];

  return (
    <section
      id="testimonials"
      className={`xl:py-24 lg:py-12  py-5 xl:px-28 lg:px-20 md:px-12 px-5 flex flex-col h-fit items-center ${manrope.className}`}
      style={{
        background: "linear-gradient(to bottom, #F5F5F5 0%, #FFFFFF 100%)",
      }}
    >
      <div
        className={`flex gap-2 items-center border border-red-primary bg-[#FAE5E1] rounded-full px-3.5 py-7px mb-2 `}
      >
        <LumiRed color="#F2411F" />
        <span className="text-sm font-semibold text-black">TESTIMONIAL</span>
      </div>
      <p
        className={`xl:text-6xl text-4xl  max-w-[450px] font-semibold text-center text-black mt-4 leading-tight  xl:max-w-[662px] mb-20`}
      >
        What Parents & Kids Are Saying
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
        {testionials.map((testimonial, index) => {
          const colorSet = bgColors[index % bgColors.length];
          return (
            <div
              key={index}
              className="p-8 flex flex-col justify-between h-[322px] rounded-[20px] w-[282px]  shadow-sm"
              style={{ background: colorSet.bg }}
            >
              <div className="flex flex-col gap-8">
                <QuoteUp color={colorSet.color} />
                <p className="text-base text-[#4B5563] font-medium">
                  {testimonial.review}
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-semibold text-black">
                  {testimonial.name}
                </span>
                <span
                  style={{
                    color: colorSet.color,
                  }}
                  className={`text-base font-semibold`}
                >
                  {testimonial.relationship}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
