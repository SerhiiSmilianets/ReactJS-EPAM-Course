import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import GenreList from '../components/GenreList';

// Clean up after each test
afterEach(cleanup);

describe('GenreList', () => {
  it('renders all genres', () => {
    render(<GenreList />);
    const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];
    genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('highlights a selected genre after a click event', () => {
    render(<GenreList />);
    const selectedGenre = "Comedy";
    fireEvent.click(screen.getByText(selectedGenre));
    const selectedButton = screen.getByRole('button', { name: selectedGenre });
    expect(selectedButton).toHaveClass('selected');
  });

  it('updates the selected genre after a click event on a genre button', () => {
    render(<GenreList />);
    const genreToSelect = "Horror";
    fireEvent.click(screen.getByText(genreToSelect));
    const selectedButton = screen.getByRole('button', { name: genreToSelect });
    expect(selectedButton).toHaveClass('selected');
  });
});
