import { createSlice, PayloadAction } from "@reduxjs/toolkit"; import { Gif } from "@/root/types/gifType";

interface GifState { gifs: Gif[];
}

export const initialState: GifState = { gifs: [],
};

type GifAction = { type: string 
                   Gif?: GifState
}
export type DispatchType = (args: GifAction) => GifAction

export const gifSlice = createSlice({ name: "gif",
initialState, reducers: {
setGifs: (state, action: PayloadAction<Gif[]>) => {
state.gifs = action.payload;
},
},
});

export const { setGifs } = gifSlice.actions; export const gifReducer = gifSlice.reducer;
