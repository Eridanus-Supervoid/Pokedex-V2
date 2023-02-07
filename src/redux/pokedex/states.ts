import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import reducers from './reducers';

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers,
});

export const pokedexActions = pokedexSlice.actions;
export default pokedexSlice.reducer;
