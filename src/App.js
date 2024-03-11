import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage'
import MovieDetails from "./components/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage/>,
    children: [
      {
        path: '/:movieId',
        element: <MovieDetails/>
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
