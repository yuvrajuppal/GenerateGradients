import { configureStore } from "@reduxjs/toolkit";
import CardListSlice from './cardslistSlice.js'

export const store = configureStore({
    reducer:{
        CardListSlice:CardListSlice
    }
})