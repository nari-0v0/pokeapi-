import { createSlice } from '@reduxjs/toolkit';
import { fetchMultiplePokemonById } from './thunk';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loding: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loding = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
        state.loding = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loding = false;
        state.data = action.payload;
      });
  },
});
