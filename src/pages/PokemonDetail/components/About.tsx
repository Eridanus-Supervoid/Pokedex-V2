import { habitatToColor } from '@/pages/PokemonHabitats/utils';
import { useAppSelector } from '@/redux';
import { wordsToUppercase } from '@/utils';
import { useNavigate } from 'react-router-dom';
import {
  AboutContainer,
  Habitat,
  HabitatContainer,
  MeasuredValue,
  MeasuresContainer,
  SpecialStatus,
  SpecialStatusContainer,
} from './styled-components';

export const About: React.FC = () => {
  const { height, description, weight, habitat, legendary, mythical } =
    useAppSelector((state) => state.pokedex.pokemonDetail);
  const navigate = useNavigate();

  const hadleClick = () => {
    navigate(`/habitats/${habitat.name}`);
  };

  return (
    <AboutContainer>
      <p>"{description}"</p>
      <MeasuresContainer>
        <span>Height:</span>
        <MeasuredValue>{height.meters}</MeasuredValue>
        <MeasuredValue>{height.feetAndInches}</MeasuredValue>
        <span>Weight:</span>
        <MeasuredValue>{weight.kg}</MeasuredValue>
        <MeasuredValue>{weight.lbs}</MeasuredValue>
      </MeasuresContainer>
      <HabitatContainer>
        <span>Habitat:</span>{' '}
        <Habitat
          type="button"
          pokemonType={habitatToColor(habitat.name)}
          onClick={hadleClick}
        >
          {wordsToUppercase(habitat.name)}
        </Habitat>
      </HabitatContainer>
      <SpecialStatusContainer>
        <SpecialStatus special={legendary}>
          {legendary ? 'Legendary' : 'Not Legendary'}
        </SpecialStatus>
        <SpecialStatus special={mythical}>
          {mythical ? 'Mythical' : 'Not Mythical'}
        </SpecialStatus>
      </SpecialStatusContainer>
    </AboutContainer>
  );
};
