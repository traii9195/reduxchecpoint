import { createSlice } from "@reduxjs/toolkit";
export const compteurSlice = createSlice ({
    name : 'compteur',
    initialState:{
        value:0,
        name : 'omar' 

    },
    reducers:{
        incriment : (state) => {
            state.value +=1
        },
    decriment :(state) => {
        state.value -=1
    },
    changename : (state)=>{
        state.name = 'mrabet'
    },
    } 
})
export const {incriment, decriment, changename,} = compteurSlice.actions
export default compteurSlice.reducer