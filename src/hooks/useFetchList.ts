import { IFetchCallback, ISetCallback } from '@/models';
import { useAppDispatch } from '@/redux';
import { addIdsToLists, countPages, calcCurrentPage } from '@/utils';
import { useState } from 'react';

export const useFetchList = (
  fetchCallback: IFetchCallback,
  setCallback: ISetCallback
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const fetchList = (offset: number): void => {
    setLoading(true);
    dispatch(fetchCallback({ offset }))
      .unwrap()
      .then(({ results, count }) => {
        const listWithIds = addIdsToLists(results);
        const numberOfPages = countPages(count);
        const currentPage = calcCurrentPage(offset);
        dispatch(
          setCallback({
            pages: numberOfPages,
            currentOffset: offset,
            currentPage,
            list: listWithIds,
          })
        );
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return { fetchList, loading, error };
};
