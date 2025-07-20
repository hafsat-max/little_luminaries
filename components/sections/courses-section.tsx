import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import { manrope } from '@/app/layout';
import { Reading } from '../icons/reading';
import { Coding } from '../icons/coding';
import { English } from '../icons/english';
import { Maths } from '../icons/maths';

export const CourseSection = () => {
  const courses = [
    {
      title: 'Mathematics',
      description:
        'Develop strong problem-solving skills with hands-on activities and real-world applications.',
      Icon: <Maths />,
      color: '#FAE5E1',
    },
    {
      title: 'English',
      description:
        'Improve reading, writing, and communication skills through interactive lessons.',
      Icon: <English />,
      color: '#FAF3E1',
    },
    {
      title: 'Coding',
      description:
        'Introduce kids to technology with beginner-friendly programming lessons.',
      Icon: <Coding />,
      color: '#F3FAE1',
    },
    {
      title: 'Reading',
      description:
        'Enhance comprehension and foster a love for books through guided reading sessions.',
      Icon: <Reading />,
      color: '#E1F5FA',
    },
  ];
  return (
    <section className="py-24 pl-[120px] flex flex-col gap-20 bg-linear-to-b from-[#F5F5F5] to-white items-center">
      <div className="flex gap-2 items-center border border-orange bg-orange-light rounded-full px-3.5 py-7px mb-2">
        <LumiRed color="#FBBA18" />
        <span className="text-sm font-semibold text-black">
          COURSES OFFERED
        </span>
      </div>
      <div className="max-w-[882px] flex flex-col items-center gap-4 mb-20">
        <p
          className={`text-6xl font-semibold text-center text-black mt-4 leading-tight ${manrope.className}`}
        >
          Empowering Young Learners with Essential Skills
        </p>
        <p className="text-[#4B5563] text-base">
          Fun, hands-on courses designed to spark curiosity and build essential
          skills!
        </p>
      </div>
      <div className={`flex gap-6 items-center ${manrope.className} overflow-auto w-full`}>
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col  bg-white rounded-[20px] shadow-lg p-8 max-w-[282px] h-[313px] "
            style={{ backgroundColor: course.color }}
          >
            <div className="mb-8 p-3 bg-white w-fit rounded-xl">
              {course.Icon}
            </div>
            <h3 className="text-3xl font-medium text-black mb-3">
              {course.title}
            </h3>
            <p className="text-base text-[#4B5563] max-w-[218px]">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
