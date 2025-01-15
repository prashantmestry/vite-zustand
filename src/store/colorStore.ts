import { create } from "zustand";

interface colorStateType {
  colors: string[];
}

type cStore = {
  colors: string[];
  addColor: (color: string) => void;
};

const useColoListStore = create<cStore>((set) => ({
  colors: ["red", "green"],
  // add color mothod.
  addColor: (color: string) =>
    set((state: colorStateType) => ({
      ...state,
      colors: [...state.colors, color],
    })),
}));

export default useColoListStore;
