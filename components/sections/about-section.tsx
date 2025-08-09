import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import { manrope } from '@/app/layout';

export const AboutSection = () => {
  return (
    <section className="xl:py-24 lg:py-18 py-12  xl:px-28 lg:px-20 sm:px-12 px-5 flex flex-col sm:gap-20 gap-5 ">
      <div className="flex sm:flex-row flex-col  justify-between lg:gap-0 gap-3">
        <div className="flex max-w-[459px] flex-col gap-2">
          <div className="bg-[#FAE5E1] border border-red-primary rounded-full lg:px-3.5 px-1.5 gap-1.5 flex items-center lg:py-7px py-1 w-fit">
            <LumiRed color="#F2411F" />
            <p className="lg:text-sm text-xs font-medium">
              WELCOME TO LITTLE LUMINARIES{' '}
            </p>
          </div>
          <p
            className={`xl:text-6xl text-4xl font-semibold text-black mt-4 leading-tight ${manrope.className}`}
          >
            A Place where learning comes to life
          </p>
        </div>
        <div className="xl:max-w-[595px] lg:max-w-[400px] max-w-[300px]  flex flex-col xl:gap-4 gap-2 mt-[6px]">
          <p
            className={`xl:text-base text-sm font-semibold xl:leading-loose leading-relaxed ${manrope.className}`}
          >
            At Little Luminaries, we bring the{' '}
            <span className="text-white bg-green-600">classroom</span> {''}
            to your <span className="text-white bg-blue-secondary">
              home
            </span>{' '}
            through fun, interactive virtual lessons that keep kids{' '}
            <span className="text-white bg-red-primary">excited</span> about
            learning. Whether it’s building confidence in math or learning to
            code, our{' '}
            <span className="text-white bg-orange">certified tutors</span> offer
            live, one-on-one or small-group sessions designed for your child's
            pace and personality.
          </p>
          <span
            className={`xl:text-base text-sm font-semibold xl:leading-loose leading-relaxed  ${manrope.className}`}
          >
            We believe every child has the power to shine when learning feels
            like play!
          </span>
        </div>
      </div>
      <img
        src="/reading.png"
        alt="about-section"
        width={1000}
        height={650}
        className="xl:h-[650px] sm:h-[500px] h-[250px] w-full sm:rounded-[32px] rounded-2xl object-cover"
      />
    </section>
  );
};
