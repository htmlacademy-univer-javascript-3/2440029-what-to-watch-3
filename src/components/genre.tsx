type GenresProps = {
  genres: string[];
  active: string;
}

export function Genres({ genres, active }: GenresProps) {
  const renderGenreItem = (genre: string) => {
    const isActive = active === genre;
    const genreClass = isActive ? 'catalog__genres-item--active' : '';

    return (
      <li key={genre} className={`catalog__genres-item ${genreClass}`}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map(renderGenreItem)}
    </ul>
  );
}

export default Genres;
