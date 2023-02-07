import { IFetchAllCallback, ISetAllCallback } from '@/models';
import { useAppDispatch } from '@/redux';
import { createListTypes } from '@/utils';
import { useState } from 'react';

export const useFetchAllList = (
  group: string,
  fetchCallback: IFetchAllCallback,
  setCallback: ISetAllCallback
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const fetchList = (currentGroup: string, page: number): void => {
    if (currentGroup !== group) {
      setLoading(true);
      dispatch(fetchCallback(group!))
        .unwrap()
        .then((listWithIds) => {
          const list = createListTypes(listWithIds);
          const numberOfPages = list.length;
          dispatch(
            setCallback({
              name: group!,
              pages: numberOfPages,
              currentPage: 1,
              list,
            })
          );
        })
        .finally(() => {
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      dispatch(setCallback({ currentPage: page }));
    }
  };

  return { fetchList, loading, error };
};
