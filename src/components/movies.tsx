import { MovieCardProps } from './movie-card';

import MovieCard from './movie-card';

type MovieListProps = {
  films: MovieCardProps[];
}

function MoviesList({films}: MovieListProps) {

  return (
    <div className='catalog__films-list'>
      {films.map((film: MovieCardProps) => (
        <MovieCard key={film.id} previewSrc={film.previewSrc} title={film.title} id={film.id} releaseDate={film.releaseDate} trailer={film.trailer} reviews={film.reviews}/>
      ))}
    </div>
  );
}

export default MoviesList;
