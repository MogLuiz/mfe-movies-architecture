import create from "zustand";
export const useStore = create((set) => ({
    movies: [],
    addMovie: (movie) => set((previous) => ({ movies: [...previous.movies, movie] })),
}));
