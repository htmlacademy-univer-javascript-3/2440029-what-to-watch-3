/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef } from 'react';

const useDelayedHover = (hoverDelay: number) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startHoverDelay = () => {
    timeoutRef.current = setTimeout(() => setIsPlaying(true), hoverDelay);
  };

  const clearHoverDelay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const stopPlaying = () => {
    clearHoverDelay();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isHovered) {
      startHoverDelay();
    } else {
      stopPlaying();
    }

    return clearHoverDelay;
  }, [isHovered, hoverDelay]);

  return {
    isPlaying,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
};

export default useDelayedHover;
