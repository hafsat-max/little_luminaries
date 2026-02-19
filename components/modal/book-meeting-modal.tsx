"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { CustomModal } from "./custom-modal";
import { useBookMeetingModal } from "@/store/useBookingModal";
import AppButton from "../common/app-button";

const CONTACT_EMAIL = "littleluminarieslearning@gmail.com";

export const BookMeetingModal = ({}) => {
  const { active, close } = useBookMeetingModal((state) => state);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.message)}`;

    window.location.href = mailtoLink;
    close();
  };

  return (
    <>
      {active && (
        <CustomModal
          onClose={() => {
            close();
          }}
          open={true}
        >
          <div>
            <h2 className={`text-3xl font-bold`}>Contact Us</h2>
            <h6 className="text-base mt-2">
              Got any concern or feedback, we would love to hear from you.
            </h6>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="flex items-center gap-4">
                <div className="w-full mb-3">
                  <p className="text-sm mb-1">First name</p>
                  <input
                    name="firstName"
                    placeholder="Enter name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="border border-[#D9D9DB] w-full
                   placeholder:text-sm p-2 rounded-lg"
                  />
                </div>
                <div className="w-full mb-3">
                  <p className="text-sm mb-1">Last name</p>
                  <input
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="border border-[#D9D9DB] w-full
                   placeholder:text-sm p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full mb-3">
                  <p className="text-sm mb-1">Email Address</p>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border border-[#D9D9DB] w-full
                   placeholder:text-sm p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full mb-3">
                  <p className="text-sm mb-1">Subject</p>
                  <input
                    name="subject"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border border-[#D9D9DB] w-full
                   placeholder:text-sm p-2 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full mb-3">
                  <p className="text-sm mb-1">Message</p>
                  <textarea
                    name="message"
                    placeholder="Leave a message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border border-[#D9D9DB] w-full
                   placeholder:text-sm p-2 rounded-lg"
                  />
                </div>
              </div>
              <div>
                <AppButton className="w-full py-6" text="Send Message" />
              </div>
            </form>
          </div>
        </CustomModal>
      )}
    </>
  );
};
