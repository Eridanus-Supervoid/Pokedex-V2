import { getPokemon, setPokemonDetail, useAppDispatch } from '@/redux';
import { useEffect, useState } from 'react';

export const useFetchDetail = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getPokemon(+id!))
      .unwrap()
      .then(({ pokemonDetails }) => {
        dispatch(setPokemonDetail(pokemonDetails));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error };
};
