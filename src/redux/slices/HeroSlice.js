import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PLAYER_URL} from "../../apis/heroApis.js";

const initialState = {
	playerInfo: {},
	isLoading: false,
	error: null,
}

export const getPlayerParams = createAsyncThunk("hero/getPlayerParams", async () => {
	try {
		const res = await fetch(PLAYER_URL)
		const data = await res.json();
		return data[0];
	} catch (error) {
		console.log(error.message);
	}
})


const heroSlice = createSlice({
	name: "hero",
	initialState,
	reducers: {
		heroHealth: (state, action) => {
			state.playerInfo.health = action.payload;
		},
		heroLevel: (state, action) => {
			state.playerInfo.level = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPlayerParams.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getPlayerParams.fulfilled, (state, action) => {
				state.isLoading = false;
				state.playerInfo = action.payload;
			})
			.addCase(getPlayerParams.rejected, (state) => {
				state.isLoading = false;
			})
	}})

export default heroSlice.reducer;
export const {heroHealth, heroLevel} = heroSlice.actions;