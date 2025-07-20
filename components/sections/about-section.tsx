import React from 'react';
import { LumiRed } from '../icons/lumi-red';
import { manrope } from '@/app/layout';

export const AboutSection = () => {
  return (
    <section className="py-24 px-[120px] flex flex-col gap-20 ">
      <div className="flex justify-between">
        <div className="flex max-w-[459px] flex-col gap-2">
          <div className="bg-[#FAE5E1] border border-red-primary rounded-full px-3.5 gap-1.5 flex items-center py-7px w-fit">
            <LumiRed color="#F2411F" />
            <p className="text-sm font-medium">Welcome to Little Luminaries</p>
          </div>
          <p
            className={`text-6xl font-semibold text-black mt-4 leading-tight ${manrope.className}`}
          >
            A Place where learning comes to life
          </p>
        </div>
        <div className="max-w-[595px] flex flex-col gap-4 mt-[6px]">
          <p
            className={`text-base font-semibold leading-loose ${manrope.className}`}
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
            className={`text-base font-semibold leading-loose ${manrope.className}`}
          >
            We believe every child has the power to shine when learning feels
            like play!
          </span>
        </div>
      </div>
      <div className="h-[650px] bg-red-100 w-full rounded-[32px]"></div>
    </section>
  );
};
