import React from "react";
import { IconClock } from "./icons/icon-clock";
import { EmailIcon } from "./icons/email-icon";
import { Instagram } from "./icons/instagram";

export const HeaderStrip = () => {
  return (
    <div className="py-5 bg-blue-primary flex justify-between px-4 flex-col sm:items-center gap-2 sm:flex-row items-start">
      <section className="flex items-center gap-2">
        <IconClock />
        <h3 className="text-white">
          Working hours : Mon -Fri. 9:00 am - 5:00 pm
        </h3>
      </section>
      <ul className="flex items-center gap-5">
        <a href="" target="_blank">
          <Instagram />
        </a>
        <a href="" target="_blank">
          <EmailIcon />
        </a>
      </ul>
    </div>
  );
};
