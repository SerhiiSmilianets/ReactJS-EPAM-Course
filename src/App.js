import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage'
import MovieDetails, {loader as movieDetailLoader} from "./components/MovieDetails";
import SearchBar from './components/SearchBar';
import { getMovieById } from './utils/movieUtils'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage/>,
    children: [
      {
        path: '/',
        element: <SearchBar/>
      },
      {
        path: '/:movieId',
        element: <MovieDetails/>,
        loader: movieDetailLoader
      }
    ]
  },
  {
    path:'/?genre/:genreId',
    element: <MovieListPage/>
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<MovieListPage/>} />
    //     {/* <Route path='/?genre/:genreId' element={<MovieListPage/>} /> */}
    //     <Route path='/:movieId' element={<MovieListPage/>} />
    //   </Routes>
    // </BrowserRouter>
    
  );
}

export default App;
