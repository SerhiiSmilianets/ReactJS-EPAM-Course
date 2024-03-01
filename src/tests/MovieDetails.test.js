import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';

describe('MovieDetails', () => {
  const movieData = {
    poster_path: 'test-poster.jpg',
    title: 'Test Movie',
    vote_average: 8.5,
    genres: ['Action', 'Adventure'],
    release_date: '2020-01-01',
    runtime: 120,
    overview: 'Test overview',
  };

  it('should render movie image', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', movieData.poster_path);
    expect(image).toHaveAttribute('alt', movieData.title);
  });

  it('should render movie title', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const title = screen.getByText(movieData.title);
    expect(title).toBeInTheDocument();
  });

  it('should render movie rating', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const rating = screen.getByText(movieData.vote_average.toString());
    expect(rating).toBeInTheDocument();
  });

  it('should render movie genres', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const genres = screen.getByText('Action & Adventure');
    expect(genres).toBeInTheDocument();
  });

  it('should render movie release year', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const releaseYear = screen.getByText('2020');
    expect(releaseYear).toBeInTheDocument();
  });

  it('should render movie runtime', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const runtime = screen.getByText('2h 0min');
    expect(runtime).toBeInTheDocument();
  });

  it('should render movie overview', () => {
    render(<MovieDetails 
      poster_path={movieData.poster_path} 
      title={movieData.title} 
      vote_average={movieData.vote_average} 
      genres={movieData.genres} 
      release_date={movieData.release_date} 
      runtime={movieData.runtime} 
      overview={movieData.overview}
    />);
    const overview = screen.getByText(movieData.overview);
    expect(overview).toBeInTheDocument();
  });
});
