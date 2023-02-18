import { LoadingScreen, Navbar } from '@/components';
import { useFetchDetail } from '@/hooks';
import { useAppSelector } from '@/redux';
import { wordsToUppercase } from '@/utils';
import { useParams } from 'react-router-dom';
import * as S from './styled-components';

const PokemonDetail: React.FC = () => {
  const { id, name } = useParams();
  const { loading, error } = useFetchDetail(id!);
  const { sprites, types } = useAppSelector(
    (state) => state.pokedex.pokemonDetail
  );
  console.log(sprites);

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   setLoading(true);
  //   dispatch(getPokemon(+id!))
  //     .unwrap()
  //     .then(({ pokemonDetails }) => {
  //       console.log('first');
  //       dispatch(setPokemonDetail(pokemonDetails));
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <S.Container pokemonType={types[0]?.name}>
          <Navbar name={wordsToUppercase(name!)} to="/" />
          <S.Carousel>
            <img src={sprites.default} alt="front" />
          </S.Carousel>
          <S.DetailsContainer pokemonType={types[0]?.name}></S.DetailsContainer>
        </S.Container>
      )}
    </>
  );
};
export default PokemonDetail;
