import { create } from "zustand";

export const useFilter = create((set) => ({
    countryName: "",
    region: "",
    findCountry: (name) => set({countryName: name}),
    findRegion: (name) => set({region: name})
}))