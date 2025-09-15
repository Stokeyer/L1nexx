import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView) return;

    // Определяем лучший формат для браузера
    const canvas = document.createElement('canvas');
    const supportsAvif = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    const supportsWebp = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;

    if (supportsAvif && avifSrc) {
      setCurrentSrc(avifSrc);
    } else if (supportsWebp && webpSrc) {
      setCurrentSrc(webpSrc);
    } else {
      setCurrentSrc(fallbackSrc);
    }
  }, [isInView, avifSrc, webpSrc, fallbackSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // Fallback на следующий формат при ошибке
    if (currentSrc === avifSrc && webpSrc) {
      setCurrentSrc(webpSrc);
    } else if (currentSrc === webpSrc && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
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
