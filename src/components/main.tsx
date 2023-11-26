import MoviesList from './movies';
import PromoFilm from './promo-film';
import Genres from './genre';
import { MovieCardProps } from './movie-card';
import Footer from './footer';

type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
  films: MovieCardProps[];
}

const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];


function MainPage({ promoFilmTitle, promoFilmGenre, promoFilmReleaseDate, films }: MainPageProps) {
  return (
    <>
      <PromoFilm
        title={promoFilmTitle}
        genre={promoFilmGenre}
        releaseDate={promoFilmReleaseDate}
        backgroundUrl='img/bg-the-grand-budapest-hotel.jpg'
        posterUrl='img/the-grand-budapest-hotel-poster.jpg'
        avatarUrl='img/avatar.jpg'
      />


      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <Genres
            genres={genres}
            active='All genres'
          />

          <MoviesList films={films} />

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
