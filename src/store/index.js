import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import createGameSlice from './GameSlice';

const useStore = create(devtools(immer((...args) => ({
  gameSlice: createGameSlice(...args),
}))));

export default useStore;
