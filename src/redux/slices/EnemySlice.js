import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENEMY_URL } from "../../apis/enemyApis.js";

const initialState = {
  enemyInfo: {},
  isLoading: false,
  error: null,
  enemyIndex: 0,
};

export const getEnemyParams = createAsyncThunk("enemy/getEnemyParams", async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState(); // Отримуємо поточний Redux-стан
    const index = state.enemy.enemyIndex; // Витягуємо enemyIndex

    const res = await fetch(ENEMY_URL);
    const data = await res.json();

    return data[index]; // Тепер завантажується ворог за `enemyIndex`
  } catch (error) {
    console.log(error.message);
    return rejectWithValue(error.message); // Передаємо помилку в Redux state
  }
});

const enemySlice = createSlice({
  name: "enemy",
  initialState,
  reducers: {
    enemyHealth: (state, action) => {
      if (state.enemyInfo) {
        state.enemyInfo.health = action.payload; // Правильне оновлення здоров'я ворога
      }
    },
    setEnemyIndex: (state, action) => {
      state.enemyIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEnemyParams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getEnemyParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.enemyInfo = action.payload;
      })
      .addCase(getEnemyParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; // Тепер помилки зберігаються в `state.error`
      });
  },
});

export default enemySlice.reducer;
export const { enemyHealth, setEnemyIndex } = enemySlice.actions;
