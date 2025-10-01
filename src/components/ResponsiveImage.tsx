import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Кэш для результатов проверки поддержки форматов
const formatSupportCache: { [key: string]: boolean } = {};

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  variants?: any;
  whileHover?: any;
  transition?: any;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  avifSrc?: string;
  webpSrc?: string;
  fallbackSrc?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  variants,
  whileHover,
  transition,
  width,
  height,
  priority = false,
  sizes = '200px',
  avifSrc,
  webpSrc,
  fallbackSrc = src
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState(fallbackSrc);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px' // Увеличиваем rootMargin для более ранней загрузки
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView) return;

    // Более надежный способ определения поддержки форматов с кэшированием
    const checkFormatSupport = (format: string): Promise<boolean> => {
      // Проверяем кэш
      if (formatSupportCache.hasOwnProperty(format)) {
        return Promise.resolve(formatSupportCache[format]);
      }

      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          formatSupportCache[format] = true;
          resolve(true);
        };
        img.onerror = () => {
          formatSupportCache[format] = false;
          resolve(false);
        };
        
        if (format === 'avif') {
          img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABoAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAABF5tZGF0EgAKCBgABogQEAwgMgk8QAAA';
        } else if (format === 'webp') {
          img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        } else {
          formatSupportCache[format] = false;
          resolve(false);
        }
      });
    };

    // Проверяем поддержку форматов асинхронно
    const determineBestFormat = async () => {
      let supportsAvif = false;
      let supportsWebp = false;

      try {
        // Проверяем AVIF
        if (avifSrc) {
          supportsAvif = await checkFormatSupport('avif');
        }
        
        // Проверяем WebP
        if (webpSrc) {
          supportsWebp = await checkFormatSupport('webp');
        }
      } catch (error) {
        console.warn('Error checking format support:', error);
        // В случае ошибки используем fallback
        supportsAvif = false;
        supportsWebp = false;
      }

      // Устанавливаем лучший доступный формат
      if (supportsAvif && avifSrc) {
        console.log('Using AVIF format for image');
        setCurrentSrc(avifSrc);
      } else if (supportsWebp && webpSrc) {
        console.log('Using WebP format for image');
        setCurrentSrc(webpSrc);
      } else {
        console.log('Using fallback format for image');
        setCurrentSrc(fallbackSrc);
      }
    };

    determineBestFormat();
  }, [isInView, avifSrc, webpSrc, fallbackSrc]);

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${currentSrc}`);
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${currentSrc}, attempting fallback`);
    
    // Fallback на следующий формат при ошибке
    if (currentSrc === avifSrc && webpSrc) {
      setCurrentSrc(webpSrc);
    } else if (currentSrc === webpSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else if (currentSrc === fallbackSrc) {
      // Если даже fallback не загружается, используем placeholder
      setCurrentSrc('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkF2YXRhcjwvdGV4dD48L3N2Zz4=');
    }
  };

  const imageProps = {
    ref: imgRef,
    src: isInView ? currentSrc : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+',
    alt,
    className,
    onLoad: handleLoad,
    onError: handleError,
    loading: (priority ? 'eager' : 'lazy') as 'eager' | 'lazy',
    width,
    height,
    sizes,
    style: {
      opacity: isLoaded ? 1 : 0.7,
      transition: 'opacity 0.3s ease-in-out',
      ...(width && height ? { aspectRatio: `${width}/${height}` } : {})
    }
  };

  if (variants || whileHover || transition) {
    return (
      <motion.img
        {...imageProps}
        variants={variants}
        whileHover={whileHover}
        transition={transition}
      />
    );
  }

  return <img {...imageProps} />;
};

export default ResponsiveImage;
