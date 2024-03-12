import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchBar from '../components/SearchBar';

export default {
  title: 'GlobalMentoringProgram/SearchBar',
  component: SearchBar,
  tags: ['autodocs']
};

export const Default = () => <SearchBar onSearch={action('onSearch')} />;

export const WithInitialValue = () => <SearchBar initialValue="test search" onSearch={action('onSearch')} />;
