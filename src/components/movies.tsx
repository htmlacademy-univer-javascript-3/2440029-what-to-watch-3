import { MovieCardProps } from './movie_card';

import MovieCard from './movie_card';

type MovieListProps = {
  films: MovieCardProps[];
}

function MoviesList({films}: MovieListProps) {

  return (
    <div className='catalog__films-list'>
      {films.map((film: MovieCardProps) => (
        <MovieCard key={film.id} previewSrc={film.previewSrc} title={film.title} id={film.id} releaseDate={film.releaseDate} trailer={film.trailer}/>
      ))}
    </div>
  );
}

export default MoviesList;
