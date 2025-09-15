import { useState, useEffect } from 'react';
import cl from './styles.module.scss';

interface ContentTransitionProps {
  children: React.ReactNode;
  delay?: number;
}

export const ContentTransition: React.FC<ContentTransitionProps> = ({ 
  children, 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`${cl.contentTransition} ${isVisible ? cl.visible : cl.hidden}`}
    >
      {children}
    </div>
  );
};
