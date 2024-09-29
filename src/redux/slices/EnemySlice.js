import {enemiesData} from "../../data/characters.js";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {enemyInfo: enemiesData}

const enemySlice = createSlice({
    name: "enemy",
    initialState,
    reducers: {
        enemyHealth: (state, action) => {
            state.playerInfo.health = action.payload;
        },

    }
})

export default enemySlice.reducer;
export const {enemyHealth} = enemySlice.actions;