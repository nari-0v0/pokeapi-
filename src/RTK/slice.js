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

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload.pokemonId);
    },
    removeFromFavorite(state, action) {
      const index = state.indexOf(action.payload.pokemonId);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
