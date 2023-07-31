import { Navigate, Route, Routes } from 'react-router-dom';
import { FootMenu } from './components';
import {
  Favorites,
  HabitatPokemons,
  Home,
  PokemonHabitats,
  Pokemons,
  PokemonTypes,
  TypePokemons,
} from './pages';
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import { GlobalStyles } from './styled-components';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokemons" element={<Pokemons />} />
        <Route path="pokemons/:name/:id" element={<PokemonDetail />} />
        <Route path="types" element={<PokemonTypes />} />
        <Route path="types/:type" element={<TypePokemons />} />
        <Route path="habitats" element={<PokemonHabitats />} />
        <Route path="habitats/:habitat" element={<HabitatPokemons />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <FootMenu />
    </>
  );
};

export default App;
