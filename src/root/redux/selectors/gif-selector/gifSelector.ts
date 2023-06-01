import { RootState } from '@/root/redux/store';

export const selectGifs = (state: RootState) => state.gifStore.gifs;
