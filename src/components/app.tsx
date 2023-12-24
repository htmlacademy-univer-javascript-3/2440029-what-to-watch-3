import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from './add-review';
import Film from './film';
import SignInForm from './login/sign-in';
import MainPage from './main';
import MyList from './my-list';
import NotFoundPage, { ProtectedWrapper } from './not-found-page';
import Player from './player/player';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <MainPage />
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
