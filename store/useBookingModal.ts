import { create } from "zustand";

type BookMeetingModalStore = {
  active: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useBookMeetingModal = create<BookMeetingModalStore>((set) => ({
  active: false,
  open: () =>
    set(() => ({
      active: true,
    })),
  close: () =>
    set(() => ({
      active: false,
    })),
  toggle: () =>
    set((state) => ({
      active: !state.active,
    })),
}));
