import { IElementWithId } from '@/models';
import {
  removeFavoritePokemon,
  setFavoritePokemon,
  useAppSelector,
} from '@/redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useFavoritePokemon = (id: string) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const { favoritePokemons } = useAppSelector((state) => state.pokedex);

  useEffect(() => {
    const isFavoritePokemon = favoritePokemons.find(
      (pokemon) => pokemon.id === id
    );
    setIsFavorite(!!isFavoritePokemon);
  }, [favoritePokemons]);

  const addFavoritePokemon = (pokemon: IElementWithId) => {
    dispatch(setFavoritePokemon(pokemon));
  };

  const deleteFavoritePokemon = (id: number) => {
    dispatch(removeFavoritePokemon(id));
  };

  return {
    isFavorite,
    addFavoritePokemon,
    deleteFavoritePokemon,
  };
};
