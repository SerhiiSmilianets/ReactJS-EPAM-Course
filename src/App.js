import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieListPage, {loader as movieListLoader} from './pages/MovieListPage'
import MovieDetails, {loader as movieDetailLoader} from "./components/MovieDetails";
import DefaultHeader from './components/DefaultHeader'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieListPage/>,
      loader: movieListLoader,
      children: [
        {
          path: '/',
          element: <DefaultHeader/>
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

  return (
    <RouterProvider router={router} />
  );
}

export default App;
