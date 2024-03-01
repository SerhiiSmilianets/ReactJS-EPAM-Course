import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '../components/MovieTile';

describe('MovieTile', () => {
  const movieData = {
    poster_path: 'test-poster.jpg',
    title: 'Test Movie',
    release_date: '2020-01-01',
    genres: ['Action', 'Adventure'],
  };

  it('renders movie image', () => {
    render(<MovieTile 
        poster_path={movieData.poster_path} 
        title={movieData.title} 
        genres={movieData.genres} 
        release_date={movieData.release_date} 
      />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', movieData.poster_path);
    expect(image).toHaveAttribute('alt', movieData.title);
  });

  it('renders movie title', () => {
    render(<MovieTile 
        poster_path={movieData.poster_path} 
        title={movieData.title} 
        genres={movieData.genres} 
        release_date={movieData.release_date} 
      />);
    const title = screen.getByText(movieData.title);
    expect(title).toBeInTheDocument();
  });

  it('renders movie release year', () => {
    render(<MovieTile 
        poster_path={movieData.poster_path} 
        title={movieData.title} 
        genres={movieData.genres} 
        release_date={movieData.release_date} 
      />);
    const releaseYear = screen.getByText('2020');
    expect(releaseYear).toBeInTheDocument();
  });

  it('renders movie genres', () => {
    render(<MovieTile 
        poster_path={movieData.poster_path} 
        title={movieData.title} 
        genres={movieData.genres} 
        release_date={movieData.release_date} 
      />);
    const genres = screen.getByText('Action, Adventure');
    expect(genres).toBeInTheDocument();
  });
});
