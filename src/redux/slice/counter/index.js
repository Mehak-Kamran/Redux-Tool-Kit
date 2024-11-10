import { createSlice } from '@reduxjs/toolkit'


export const counterslice=createSlice({
    initialState:0,
    name: 'counter',
    //reducers are defined inside slice
    reducers:{
        //defining actions inside reducer
        increment:(state)=>{ return state+1},
        decrement:(state)=>{ return state-1}
    }
})

//export action and reducer
export const { increment, decrement} = counterslice.actions

export default counterslice.reducer
    
    

