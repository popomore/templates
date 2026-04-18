import { create } from "zustand";

interface AppState {
  title: string;
  setTitle: (title: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  title: "Dashboard",
  setTitle: (title) => set({ title }),
}));
