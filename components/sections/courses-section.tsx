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
    <section
      className="xl:py-24 sm:px-12 px-5 flex flex-col xl:gap-20 sm:gap-14 gap-5 items-center overflow-auto h-fit"
      style={{
        background: 'linear-gradient(to bottom, #F5F5F5 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex gap-2 items-center border border-orange bg-orange-light rounded-full px-3.5 py-7px mb-2 xl:mx-28 lg:mx-20 mx-12">
        <LumiRed color="#FBBA18" />
        <span className="text-sm font-semibold text-black">
          COURSES OFFERED
        </span>
      </div>
      <div className="xl:max-w-[882px] max-w-[620px] flex flex-col items-center gap-4 sm:mb-20 mb-5 xl:mx-28 lg:mx-20 sm:mx-12 mx-0">
        <p
          className={`xl:text-6xl text-4xl  font-semibold text-center text-black mt-4 leading-tight ${manrope.className}`}
        >
          Empowering Young Learners with Essential Skills
        </p>
        <p className="text-[#4B5563] text-base sm:text-start text-center">
          Fun, hands-on courses designed to spark curiosity and build essential
          skills!
        </p>
      </div>
      <div
        className={` grid grid-cols-1 sm:flex gap-6 items-center ${manrope.className} overflow-auto w-full xl:px-28 lg:px-20 px-12 `}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col  bg-white rounded-[20px] shadow-lg p-8 max-w-[282px] min-w-[282px] h-[313px] "
            style={{ backgroundColor: course.color }}
          >
            <div className="mb-8 p-3 bg-white w-fit rounded-xl">
              {course.Icon}
            </div>
            <h3 className="text-3xl font-medium text-black mb-3">
              {course.title}
            </h3>
            <p className="text-base text-[#4B5563] max-w-[218px]">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
