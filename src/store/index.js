import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => {
  return {
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
  };
}));

export default useStore;
