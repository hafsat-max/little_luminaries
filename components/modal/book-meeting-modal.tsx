"use client";
import React, { ReactNode } from "react";
import { CustomModal } from "./custom-modal";
import { useBookMeetingModal } from "@/store/useBookingModal";

export const BookMeetingModal = ({}) => {
  const { active, toggle } = useBookMeetingModal((state) => state);
  return (
    <>
      {active && (
        <CustomModal
          onClose={() => {
            toggle();
          }}
          open={true}
        >
          <div>Content of the modal</div>
        </CustomModal>
      )}
    </>
  );
};
