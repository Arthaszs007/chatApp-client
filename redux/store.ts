
import { TypedUseSelectorHook,useSelector } from 'react-redux';
import { configureStore} from "@reduxjs/toolkit";
import sessionSlice from "./feather/sessionSlice"



export const store = configureStore({
    reducer:{
        sessionSlice,
    }
   
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;