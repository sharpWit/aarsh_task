import { FC, ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

// ScrollToTop component
const ScrollToTop: FC<Props> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return children;
};

export default ScrollToTop;
