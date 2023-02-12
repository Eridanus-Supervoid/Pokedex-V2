import { IAllListAndPagination, IListAndPagination } from '@/models';
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
  const imageLoaded = () => {
    counter.current += 1;
    console.log(counter.current, pokemons.list!.length);
    if (counter.current >= pokemons.list!.length) {
      setLoadingImages(false);
      counter.current = 0;
    }
  };
  return { loadingImages, imageLoaded, setLoadingImages };
};
