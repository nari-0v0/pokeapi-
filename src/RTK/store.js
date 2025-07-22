import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokemonSlice } from './slice';
import Favorite from '../pages/Favorite';

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
