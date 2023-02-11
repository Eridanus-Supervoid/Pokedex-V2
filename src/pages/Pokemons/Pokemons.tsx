import { ErrorMessage, InputSearch, Navbar, Pagination } from '@/components';
import { PokemonCard } from '@/components/PokemonCard';
import { useFetchList } from '@/hooks';
import { IElementWithId } from '@/models';
import { getAllPokemons, setPokemons, useAppSelector } from '@/redux';
import { API_IMG_URL } from '@/services';
import { GeneralContainer, ListContainer } from '@/styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Pokemons: React.FC = () => {
  const { pokemons } = useAppSelector((state) => state.pokedex);
  const [images, setImages] = useState([]);
  const { fetchList, loading, error } = useFetchList(
    getAllPokemons,
    setPokemons
  );

  const getImages = async () => {
    const imgs = await Promise.all(
      pokemons.list?.map(async (pokemon: IElementWithId) => {
        const img = await axios.get(`${API_IMG_URL}${pokemon.id}.png`);
        return img;
      })
    );
    return imgs;
  };

  useEffect(() => {
    getImages().then((imgs) => console.log(imgs));
    // .catch((err) => console.log(err));
  }, []);

  return (
    <GeneralContainer>
      <Navbar name="Pokemons" to="/" />
      <InputSearch />
      {!loading && (
        <ListContainer>
          {pokemons.list?.map((pokemon: IElementWithId) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </ListContainer>
      )}
      <Pagination
        loading={loading}
        totalPages={pokemons.pages || 0}
        currentPage={pokemons.currentPage || 1}
        totalButtons={5}
        fetchList={fetchList}
        show={!!(pokemons.pages - 1)}
      />
      {error && <ErrorMessage />}
    </GeneralContainer>
  );
};
export default Pokemons;
