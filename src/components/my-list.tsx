import Footer from './footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilmDispatch } from '../store';
import { fetchFavoriteFilms } from '../store/api-action';
import { InitialState } from '../store/reducer';
import MoviesList from './movies';
import { ListHeader } from './my-list-header';


function MyList() {
  const dispatch = useDispatch<FilmDispatch>();
  const { favoriteFilms } = useSelector((state: InitialState) => state.filmsData);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <div className='user-page'>
      <ListHeader totalFilms={favoriteFilms.length} />
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <MoviesList films={favoriteFilms} />
      </section>
      <Footer/>
    </div>
  );
}

export default MyList;
