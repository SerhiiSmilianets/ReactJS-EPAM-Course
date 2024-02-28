import './App.css';

import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import GenreList from './components/GenreList';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <>
      <Counter/>
      <SearchBar/>
      <GenreList/>
      <MoviesList/>
    </>
  );
}

export default App;
