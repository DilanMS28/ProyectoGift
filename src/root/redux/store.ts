import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { gifReducer } from "./reducers/gif-reducer/gifReducer";
//import { cartReducer } from './reducers/cart-reducer/cartReducer';

export const ApplicationStore = configureStore({ reducer: {
gifStore: gifReducer,
// cartStore: cartReducer,
},
});

export type RootState = ReturnType<typeof ApplicationStore.getState>; export default ApplicationStore;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
