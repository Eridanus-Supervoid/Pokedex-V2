import { calcCurrentOffset } from '@/utils';
import { useEffect } from 'react';
import * as S from './styled-components';

interface IPaginationProps {
  totalPages: number;
  totalButtons: number;
  fetchList?: (offset: number) => void;
  fetchAllList?: (group: string, page: number) => void;
  loading: boolean;
  currentPage?: number;
  show: boolean;
  paginateAll?: boolean;
  group?: string;
}

export const Pagination: React.FC<IPaginationProps> = ({
  totalPages,
  fetchList,
  fetchAllList,
  totalButtons = 6,
  loading,
  currentPage = 1,
  show,
  paginateAll = false,
  group,
}) => {
  const buttonsPage = [...Array(totalButtons)];
  const centerPage = Math.floor(totalButtons / 2);

  const changePage = (value: number) => {
    paginateAll
      ? fetchAllList?.(group!, value)
      : fetchList?.(calcCurrentOffset(value));
  };

  useEffect(() => {
    !loading && window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    paginateAll
      ? fetchAllList?.(group!, currentPage)
      : !!!totalPages && fetchList?.(calcCurrentOffset(currentPage));
  }, []);

  return (
    <S.Container>
      {!loading && show && (
        <>
          <S.Button
            type="button"
            disabled={currentPage - 1 < 1}
            onClick={() => changePage(1)}
          >
            {'<<'}
          </S.Button>
          <S.Button
            type="button"
            disabled={currentPage - 1 < 1}
            onClick={() => changePage(currentPage - 1)}
          >
            {'<'}
          </S.Button>
          {buttonsPage.map((_, index) => {
            const buttonPage =
              currentPage > centerPage
                ? currentPage - (centerPage - index)
                : currentPage + index;

            if (buttonPage > 0 && buttonPage <= totalPages) {
              return (
                <S.Button
                  type="button"
                  key={buttonPage}
                  disabled={currentPage === buttonPage}
                  onClick={() => {
                    changePage(buttonPage);
                  }}
                >
                  {buttonPage}
                </S.Button>
              );
            }

            if (totalPages === 0 && index === 0) {
              return (
                <S.Button
                  type="button"
                  key={buttonPage}
                  disabled
                  onClick={() => {
                    changePage(buttonPage);
                  }}
                >
                  1
                </S.Button>
              );
            }

            return null;
          })}
          <S.Button
            type="button"
            disabled={currentPage + 1 > totalPages}
            onClick={() => changePage(currentPage + 1)}
          >
            {'>'}
          </S.Button>
          <S.Button
            type="button"
            disabled={currentPage + 1 > totalPages}
            onClick={() => changePage(totalPages)}
          >
            {'>>'}
          </S.Button>
        </>
      )}
    </S.Container>
  );
};
