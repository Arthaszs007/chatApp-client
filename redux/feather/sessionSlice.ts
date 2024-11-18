import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name:"sessionSlice",
    initialState:{
        username:"",
        token:"",
        isAuth:false,
    },reducers:{
        setSessionSlice:(state,action:PayloadAction<any>)=>{
            const {username,token} = action.payload;
            state.username = username;
            state.token = token;
        }
    }
})

export const {setSessionSlice} = sessionSlice.actions;
export default sessionSlice.reducer;