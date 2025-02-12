// src/redux/enemySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { enemiesData } from "../../data/characters";

const initialState = {
  enemyInfo: enemiesData[15], // Початковий ворог - перший у списку
  enemyIndex: 0,
};

const enemySlice = createSlice({
  name: "enemy",
  initialState,
  reducers: {
    enemyHealth: (state, action) => {
      if (state.enemyInfo) {
        state.enemyInfo.health = action.payload; // Оновлюємо здоров'я поточного ворога
      }
    },
    setEnemyIndex: (state, action) => {
      state.enemyIndex = action.payload;
      state.enemyInfo = enemiesData[action.payload]; // Оновлюємо ворога за індексом
    },
  },
});

export default enemySlice.reducer;
export const { enemyHealth, setEnemyIndex } = enemySlice.actions;
