import './App.css';

import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import GenreList from './components/GenreList';
import MoviesList from './components/MoviesList';
import Dialog from './components/Dialog';
import MovieForm from './components/MovieForm';

import { createPortal } from 'react-dom';

function App() {
  return (
    <>
      <Counter/>
      <SearchBar/>
      <GenreList/>
      
      {createPortal(
        <Dialog>
          <MovieForm />
        </Dialog>,
        document.body
      )}
      
      <MoviesList/>
    </>
  );
}

export default App;
