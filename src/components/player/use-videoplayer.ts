import { useEffect, useRef, useState } from 'react';
import { convertSecondsToFormattedTime } from './player-utils';

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const updateTimeLeft = () => {
      const time = video.duration - video.currentTime;
      setTimeLeft(convertSecondsToFormattedTime(time));
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('timeupdate', updateTimeLeft);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateTimeLeft);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullScreen = () => {
    const player = videoRef.current?.parentElement;

    if (!document.fullscreenElement && player) {
      player.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };


  const onLoadedData = () => {
    setIsLoading(false);
    setTimeLeft(convertSecondsToFormattedTime(videoRef.current!.duration));
  };

  return { videoRef, isPlaying, togglePlay, timeLeft, isLoading, onLoadedData, progress, toggleFullScreen };
};
