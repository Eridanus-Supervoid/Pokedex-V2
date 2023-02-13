import {
  IAllListAndPagination,
  IElementWithId,
  IListAndPagination,
} from '@/models';
import { useEffect, useRef, useState } from 'react';

export const useImageLoader = (
  pokemons: IAllListAndPagination | IListAndPagination
) => {
  const [loadingImages, setLoadingImages] = useState(true);
  const counter = useRef(0);

  useEffect(() => {
    loadingImages
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [loadingImages]);

  useEffect(() => {
    setLoadingImages(true);
  }, [pokemons.currentPage]);

  if (loadingImages) {
    if (!!!pokemons.list?.length) {
      setLoadingImages(false);
    }
  }

  const imageLoaded = () => {
    counter.current += 1;

    const isAllList = Array.isArray(pokemons.list![0]);

    if (isAllList) {
      const currentList = pokemons.list![pokemons.currentPage! - 1];
      if (counter.current >= (currentList as IElementWithId[]).length) {
        setLoadingImages(false);
        counter.current = 0;
      }
    } else {
      const currentList = pokemons.list!;
      if (counter.current >= currentList.length) {
        setLoadingImages(false);
        counter.current = 0;
      }
    }
  };

  return { loadingImages, imageLoaded, setLoadingImages };
};
