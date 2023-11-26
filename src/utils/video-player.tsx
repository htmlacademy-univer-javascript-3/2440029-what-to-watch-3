/* eslint-disable no-unused-expressions */

import React, { useRef, useEffect } from 'react';

type Props = {
  videoSource: string;
  poster: string;
  autoplay: boolean;
};

const VideoPlayer: React.FC<Props> = ({ videoSource, poster, autoplay }) => {
  const videoElementRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    if (videoElementRef.current) {
      videoElementRef.current.play();
    }
  };

  const pauseAndReloadVideo = () => {
    const videoElement = videoElementRef.current;
    if (videoElement) {
      videoElement.pause();
      videoElement.load();
    }
  };

  useEffect(() => {
    autoplay ? playVideo() : pauseAndReloadVideo();
  }, [autoplay]);

  return (
    <video
      ref={videoElementRef}
      width='280'
      height='175'
      src={videoSource}
      poster={poster}
      muted
      loop
    />
  );
};

export default VideoPlayer;
