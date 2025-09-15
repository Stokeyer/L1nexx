import React from 'react';
import cl from './styles.module.scss';

export const NotFound: React.FC = () => {

    const handleNavigation = (path: string) => {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
        
    };
  return (
    <div className={cl.notFound}>
      <svg className={cl.notFound__icon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <button onClick={() => handleNavigation('/')}>Вернутся на главную</button>
    </div>
  );
};
