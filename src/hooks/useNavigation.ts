import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const [currentSection, setCurrentSection] = useState('');

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getCurrentSection = (pathname: string) => {
    const sections = pathname.split('/').filter((section) => section !== '');
    return `/${sections[0]}`;
  };

  useEffect(() => {
    setCurrentSection(getCurrentSection(pathname));
  }, [pathname]);

  const handleNavigate = () => {
    if (window.history.length > 2) {
      if (currentSection !== '/' && pathname !== currentSection) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } else {
      navigate('/');
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return { handleNavigate, handleNavigateHome };
};
