import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENEMY_URL } from "../../apis/enemyApis.js";

const initialState = {
  enemyInfo: {},
  isLoading: false,
  error: null,
  enemyIndex: 0,
};

export const getEnemyParams = createAsyncThunk("enemy/getEnemyParams", async () => {
  try {
    const res = await fetch(ENEMY_URL);
    const data = await res.json();
    return data[1];
  } catch (error) {
    console.log(error.message);
  }
});

const enemySlice = createSlice({
  name: "enemy",
  initialState,
  reducers: {
    enemyHealth: (state, action) => {
      state.enemyInfo.health = action.payload;
    },
    setEnemyIndex: (state, action) => {
      state.enemyIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEnemyParams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnemyParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.enemyInfo = action.payload;
      })
      .addCase(getEnemyParams.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default enemySlice.reducer;
export const { enemyHealth, setEnemyIndex } = enemySlice.actions;
