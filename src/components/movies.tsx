import { FilmShortInfo } from '../types/films';

import MovieCard from './movie-card';

type MovieListProps = {
  films: FilmShortInfo[];
}

function MoviesList({ films }: MovieListProps) {

  return (
    <div className='catalog__films-list'>
      {films.map((film: FilmShortInfo) => (
        <MovieCard key={film.id} previewSrc={film.previewImage} title={film.name} id={film.id} trailer={film.previewVideoLink} />
      ))}
    </div>
  );
}

export default MoviesList;
