import { create } from "zustand";

type BookMeetingModalStore = {
  active: boolean;
  toggle: () => void;
};

export const useBookMeetingModal = create<BookMeetingModalStore>((set) => ({
  active: false,
  toggle: () =>
    set((state) => ({
      active: !state.active,
    })),
}));
