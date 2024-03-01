import './App.css';

import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import GenreList from './components/GenreList';
import MoviesList from './components/MoviesList';
import DialogOpenButton from './components/DialogOpenButton';

function App() {
  return (
    <>
      <Counter/>
      <SearchBar/>
      <GenreList/>
      <MoviesList/>
      <DialogOpenButton/>
    </>
  );
}

export default App;
