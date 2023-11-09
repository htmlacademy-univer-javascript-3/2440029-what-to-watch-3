import { Link } from 'react-router-dom';


export type MovieCardProps = {
  id: string;
  releaseDate: string;
  genre?: string;
  trailer?: string;
  title: string;
  previewSrc: string;
  description?: string;
  onMouseEnter?: () => void;
  onMouseLeft?: () => void;
}


function MovieCard({ id, previewSrc, title, onMouseEnter, onMouseLeft }: MovieCardProps) {
  return (
    <article className='small-film-card catalog__films-card'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeft}
      >
      <div className='small-film-card__image'>
        <img src={previewSrc} alt={title} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
      <Link to={`/films/${id}`} className="small-film-card__link">{title || ''}
         </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
