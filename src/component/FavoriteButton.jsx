import { useSelector } from 'react-redux';
import { favoriteSlice } from '../RTK/slice';
import { useDispatch } from 'react-redux';

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className={isFavorite ? 'text-[red]' : ''}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}
