import logo from './logo.svg';
import './App.css';
// import Movies from './pages/movies/movielist/MovieListPage';

import WrapperMovies from './pages/movies/WrapperMovies';

import { AuthWrapper } from './structure/AuthWrapper';
import { BrowserRouter } from 'react-router-dom';
import HeaderFooter from './pages/homepage/HeaderFooter';
import FooterFile from './pages/homepage/FooterFile';
import ContentFile, { SearchBar } from './pages/homepage/ContentFile';

function App() {
  return (

    <>

      <BrowserRouter>
        <HeaderFooter />
           <AuthWrapper />
        <FooterFile />
      </BrowserRouter>


    </>
  );
}

export default App;
