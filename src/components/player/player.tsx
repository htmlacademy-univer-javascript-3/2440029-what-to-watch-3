import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { InitialState } from '../../store/reducer';
import { useVideoPlayer } from './use-videoplayer';


function Player() {
  const { id } = useParams<{ id: string }>();
  const currentFilm = useSelector((state: InitialState) => state.filmsData.currentFilm);
  const promoFilm = useSelector((state: InitialState) => state.filmsData.promoFilm);
  // eslint-disable-next-line
  const film = useMemo(() => currentFilm && currentFilm.id === id ? currentFilm :
    promoFilm && promoFilm.id === id ? promoFilm : null, [id, currentFilm, promoFilm]);

  const {
    videoRef,
    isPlaying,
    togglePlay,
    timeLeft,
    isLoading,
    onLoadedData,
    progress,
    toggleFullScreen
  } = useVideoPlayer();

  return (
    <div className='player'>
      <video
        ref={videoRef}
        src={film?.videoLink}
        className="player__video"
        poster={film?.posterImage}
        onLoadedData={onLoadedData}
        autoPlay
      />
      {isLoading && <div className="loading-spinner">Loading...</div>}
      <Link to={`/films/${film!.id}`} className="player__exit">Exit</Link>

      <div className='player__controls'>
        <div className='player__controls-row'>
          <div className='player__time'>
            <progress className='player__progress' value={progress} max='100'></progress>
            <div className='player__toggler' style={{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className='player__time-value'>{timeLeft}</div>
        </div>

        <div className='player__controls-row'>
          <button type='button' className='player__play' onClick={togglePlay}>
            {isPlaying ? (
              <>
                <svg viewBox='0 0 14 21' width='14' height='21'>
                  <use xlinkHref='#pause'></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox='0 0 19 19' width='19' height='19'>
                  <use xlinkHref='#play-s'></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className='player__name'>{film?.name}</div>

          <button type='button' className='player__full-screen' onClick={toggleFullScreen}>
            <svg viewBox='0 0 27 27' width='27' height='27'>
              <use xlinkHref='#full-screen'></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
