/* eslint-disable react/no-unused-prop-types */
import { Link } from 'react-router-dom';
import useDelayedHover from '../hooks/delayed-hover';
import VideoPlayer from '../utils/video-player';


export type MovieCardProps = {
  id: string;
  releaseDate?: string;
  genre?: string;
  trailer: string;
  title: string;
  previewSrc: string;
  description?: string;
  director?: string;
  rating?: number;
  ratingLevel?: string;
  ratingsCount?: number;
  starring?: string[];
  reviews: Review[];
  runtime?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type Review = {
  reviewText: string;
  reviewAuthor: string;
  reviewDate: string;
  reviewFormattedDate: string;
  reviewRating: number;
}

function MovieCard({
  id,
  previewSrc,
  title,
  trailer,
}: MovieCardProps) {

  const delayedHover = useDelayedHover(1000);

  return (
    <article
      className='small-film-card catalog__films-card'
      onMouseEnter={delayedHover.onMouseEnter}
      onMouseLeave={delayedHover.onMouseLeave}
    >
      <div className='small-film-card__image'>
        {
          delayedHover.isPlaying ?
            (<VideoPlayer videoSource={trailer} poster={previewSrc} autoplay={delayedHover.isPlaying} />) : <img src={previewSrc} alt={title} width='280' height='175' />
        }
      </div>
      <h3 className='small-film-card__title'>
        <Link to={`/films/${id}`} className='small-film-card__link'>
          {title || ''}
        </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
