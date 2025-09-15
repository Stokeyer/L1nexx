import { useState, useEffect } from 'react';
import { Home } from '../components/pages/home/home';
import { About } from '../components/pages/about/About';
import { Skills } from '../components/pages/skills/Skills';
import { Projects } from '../components/pages/projects/Projects';
import { Contacts } from '../components/pages/contacts/Contacts';
import { PageTransition } from '../components/transitions/PageTransition';
import { NotFound } from '../components/pages/NotFound/NotFound';

const ROUTES: { [key: string]: React.ComponentType } = {
  '/': Home,
  '/about': About,
  '/skills': Skills,
  '/project': Projects,
  '/contacts': Contacts,
};

export const Router = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
        setIsTransitioning(false);
      }, 150);
    };

    window.addEventListener('popstate', handlePopState);
    return () => { 
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath]);

  const getCurrentComponent = () => {
    const Component = ROUTES[currentPath];
    return Component ? <Component /> : <NotFound />;
  };

  return (
    <div>
      <PageTransition 
        isVisible={!isTransitioning}
        onAnimationComplete={() => {
        }}
      >
        {getCurrentComponent()}
      </PageTransition>
    </div>
  );
};

export { Router as default };