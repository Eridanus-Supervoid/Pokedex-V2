import * as S from './styled-components';
import { Link } from 'react-router-dom';

interface LinkContainerProps {
  name: string;
  to: string;
  bgColor?: string;
}

export const LinkContainer: React.FC<LinkContainerProps> = ({
  bgColor,
  to,
  name,
}) => {
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <S.LinkContainer bgColor={bgColor}>{name}</S.LinkContainer>
    </Link>
  );
};
