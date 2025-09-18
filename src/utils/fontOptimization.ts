
export const isFontLoadingSupported = (): boolean => {
  return 'fonts' in document;
};

// Предзагрузка критических шрифтов
export const preloadCriticalFonts = (): void => {
  if (!isFontLoadingSupported()) return;

  const criticalFonts = [
    { family: 'Inter', weight: '400', style: 'normal' },
    { family: 'Inter', weight: '500', style: 'normal' },
    { family: 'Inter', weight: '600', style: 'normal' },
    { family: 'Inter', weight: '700', style: 'normal' }
  ];

  criticalFonts.forEach(font => {
    document.fonts.load(`${font.weight} 16px ${font.family}`);
  });
};

// Обработка загрузки шрифтов
export const handleFontLoading = (): void => {
  if (!isFontLoadingSupported()) {
    // Fallback для старых браузеров
    setTimeout(() => {
      document.documentElement.classList.add('fonts-loaded');
    }, 1000);
    return;
  }

  // Ожидание загрузки всех шрифтов
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });

  // Fallback на случай, если шрифты не загрузятся
  setTimeout(() => {
    document.documentElement.classList.add('fonts-loaded');
  }, 3000);
};

// Инициализация оптимизации шрифтов
export const initFontOptimization = (): void => {
  preloadCriticalFonts();
  handleFontLoading();
};
