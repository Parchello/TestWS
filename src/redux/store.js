import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "./slices/HeroSlice";
import enemyReducer from "./slices/EnemySlice";
import inventoryReducer from "./slices/InventorySlice";

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    enemy: enemyReducer,
    inventory: inventoryReducer,
  },
});
