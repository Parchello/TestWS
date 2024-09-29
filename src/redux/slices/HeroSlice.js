import {playerData} from "../../data/characters.js";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {playerInfo: {...playerData}}

const heroSlice = createSlice({
    name: "hero",
    initialState,
    reducers: {
        heroHealth: (state, action) => {
            state.playerInfo.health = action.payload;
        },
        heroLevel: (state, action) => {
            state.playerInfo.level =  action.payload;
        },
    }
})

export default heroSlice.reducer;
export const {heroHealth, heroLevel} = heroSlice.actions;