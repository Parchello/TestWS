import {configureStore} from "@reduxjs/toolkit";
import heroReducer from "./slices/HeroSlice.js"
import enemyReducer from "./slices/EnemySlice.js"

export const store = configureStore({
    reducer: {hero: heroReducer, enemy:enemyReducer},
});
