import { createSlice } from "@reduxjs/toolkit";
const initstate = {
    cardcolors : []
}
const CardColorList = createSlice({
    name:"cardColors",
    initialState:initstate,
    reducers:{
        assignnewlist:(state,action)=>{
          
            
            state.cardcolors=action.payload
        }
    }
})

export const {assignnewlist} = CardColorList.actions
export default CardColorList.reducer