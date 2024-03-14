import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieListPage, {loader as movieListLoader} from './pages/MovieListPage'
import MovieDetails, {loader as movieDetailLoader} from "./components/MovieDetails";
import SearchBar from './components/SearchBar'
import AddNewMovie from './components/AddNewMovie';
import EditMovie from './components/EditMovie';
import DeleteMovie from './components/DeleteMovie';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieListPage/>,
      loader: movieListLoader,
      children: [
        {
          path: '/',
          element: <SearchBar/>,
          children: [
            {
              path: '/new',
              element: <AddNewMovie/>
            },
            {
              path: '/:movieId/edit',
              element: <EditMovie/>,
              loader: movieDetailLoader
            },
            {
              path: '/:movieId/delete',
              element: <DeleteMovie/>
            }
          ]
        },
        {
          path: '/:movieId',
          element: <MovieDetails/>,
          loader: movieDetailLoader,
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
