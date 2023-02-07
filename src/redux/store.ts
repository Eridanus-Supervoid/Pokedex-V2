import { configureStore } from '@reduxjs/toolkit';
import { states as pokedexReducer } from './pokedex';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
