import React from 'react';
import { action } from '@storybook/addon-actions';
import GenreList from '../components/GenreList';

export default {
  title: 'GlobalMentoringProgram/GenreList',
  component: GenreList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
};

export const Default = () => <GenreList onSelectGenre={action('onSelectGenre')} />;

export const WithSelectedGenre = () => <GenreList selectedGenre="Comedy" onSelectGenre={action('onSelectGenre')} />;
