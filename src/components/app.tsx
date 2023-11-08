import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './main';
import NotFoundPage, { ProtectedWrapper } from './not-found-page';
import SignInForm from './login/sign-in';
import MyList from './my-list';
import Film from './film';
import AddReview from './add-review';
import Player from './player';


type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseDate: string;
};

function App(props: AppProps) {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <MainPage
              promoFilmTitle={props.promoTitle}
              promoFilmGenre={props.promoGenre}
              promoFilmReleaseDate={props.promoReleaseDate}
            />
          }
          />
          <Route path='/login' element={<SignInForm />} />
          <Route path='/mylist' element={<ProtectedWrapper><MyList /></ProtectedWrapper>} />
          <Route path='/films/:id' element={<Film />} />
          <Route path='/films/:id/review' element={<AddReview />} />
          <Route path='/player/:id' element={<Player />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
