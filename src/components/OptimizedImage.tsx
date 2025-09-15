import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  variants?: any;
  whileHover?: any;
  transition?: any;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  variants,
  whileHover,
  transition,
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
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

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imageProps = {
    ref: imgRef,
    src: isInView ? src : placeholder,
    alt,
    className,
    onLoad: handleLoad,
    loading: (priority ? 'eager' : 'lazy') as 'eager' | 'lazy',
    width,
    height,
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

export default OptimizedImage;
