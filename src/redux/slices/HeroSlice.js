import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { playerData } from "../../data/characters";
import { PLAYER_URL } from "../../apis/heroApis.js";

const initialState = {
  players: [playerData],
  isLoading: false,
  error: null,
};

// export const getPlayerParams = createAsyncThunk("hero/getPlayerParams", async () => {
//   try {
//     const res = await fetch(PLAYER_URL);
//     return await res.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// });

export const createNewPlayer = createAsyncThunk("hero/createNewPlayer", async (newPlayer) => {
  try {
    const response = await fetch(PLAYER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    });
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
});

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    heroHealth: (state, action) => {
      state.players[0].health = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(getPlayerParams.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(getPlayerParams.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.players = action.payload;
      // })
      // .addCase(getPlayerParams.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(createNewPlayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewPlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players.push(action.payload);
      })
      .addCase(createNewPlayer.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default heroSlice.reducer;
export const { heroHealth, heroLevel } = heroSlice.actions;
