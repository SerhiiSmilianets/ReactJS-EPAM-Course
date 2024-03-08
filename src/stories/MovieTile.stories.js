import React from 'react';
import MovieTile from '../components/MovieTile';

export default {
  title: 'GlobalMentoringProgram/MovieTile',
  component: MovieTile,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <MovieTile {...args} onClick={() => {}} />;

Default.args = {
  movieData: {
    id: '1',
    poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg", 
    title: "Star Wars: The Last Jedi", 
    genres: ["Fantasy", "Adventure","Science Fiction"],
    release_date: "2017-12-13",
  },
};
