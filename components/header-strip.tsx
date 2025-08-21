import React from "react";
import { IconClock } from "./icons/icon-clock";
import { EmailIcon } from "./icons/email-icon";
import { Instagram } from "./icons/instagram";

export const HeaderStrip = () => {
  return (
    <div className="py-5 bg-blue-primary flex justify-between xl:px-28 lg:px-20 sm:px-12 px-5 flex-col sm:items-center sm:gap-2 gap-4 sm:flex-row items-start">
      <section className="flex items-center gap-2">
        <IconClock />
        <h3 className="text-white sm:text-base text-sm">
          Working hours : Mon -Fri. 9:00 am - 5:00 pm
        </h3>
      </section>
      <ul className="flex items-center gap-5">
        <a
          href="https://www.instagram.com/the_little_luminaries?igsh=YXB6amVhb3c0ZzI%3D&utm_source=qr"
          target="_blank"
        >
          <Instagram />
        </a>
        <a
          href="mailto:littleluminaries@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
      </ul>
    </div>
  );
};
