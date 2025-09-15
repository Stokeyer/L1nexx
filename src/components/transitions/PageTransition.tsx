import { useState, useEffect } from 'react';
import cl from './styles.module.scss';

interface PageTransitionProps {
  children: React.ReactNode;
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ 
  children, 
  isVisible, 
  onAnimationComplete 
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
        onAnimationComplete?.();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onAnimationComplete]);

  useEffect(() => {
    return () => {
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`${cl.pageTransition} ${isVisible ? cl.visible : cl.hidden}`}>
      {children}
    </div>
  );
};