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
        console.log('first');
        dispatch(setPokemonDetail(pokemonDetails));
      })
      .catch((error) => {
        console.log('error', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error };
};
