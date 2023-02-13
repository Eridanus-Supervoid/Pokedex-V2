import { Spinner } from '@/styled-components';
import * as S from './styled-components';

export const LoadingScreen: React.FC = () => {
  return (
    <S.Container>
      <Spinner />
    </S.Container>
  );
};
