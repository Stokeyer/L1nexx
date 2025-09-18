
export const isFontLoadingSupported = (): boolean => {
  return 'fonts' in document;
};


export const preloadCriticalFonts = (): void => {
  // Убираем принудительную загрузку шрифтов, так как они загружаются через CSS
  // Это предотвращает ошибки NetworkError
  console.log('Font optimization initialized - fonts will load via CSS');
};


export const handleFontLoading = (): void => {
  // Простая и надежная обработка загрузки шрифтов
  const addFontsLoadedClass = () => {
    document.documentElement.classList.add('fonts-loaded');
  };

  if (!isFontLoadingSupported()) {
    // Fallback для старых браузеров
    setTimeout(addFontsLoadedClass, 1000);
    return;
  }

  // Ожидание загрузки всех шрифтов с обработкой ошибок
  try {
    document.fonts.ready.then(() => {
      addFontsLoadedClass();
    }).catch((error) => {
      console.warn('Font loading failed:', error);
      addFontsLoadedClass();
    });
  } catch (error) {
    console.warn('Font API error:', error);
    addFontsLoadedClass();
  }

  // Fallback на случай, если шрифты не загрузятся в течение 2 секунд
  setTimeout(() => {
    if (!document.documentElement.classList.contains('fonts-loaded')) {
      addFontsLoadedClass();
    }
  }, 2000);
};

// Инициализация оптимизации шрифтов
export const initFontOptimization = (): void => {
  // Инициализируем только обработку готовности шрифтов
  handleFontLoading();
};
