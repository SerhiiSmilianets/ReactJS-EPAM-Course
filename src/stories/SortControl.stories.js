import React from 'react';
import { action } from '@storybook/addon-actions';
import SortControl from '../components/SortControl';

export default {
  title: 'GlobalMentoringProgram/SortControl',
  component: SortControl,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

export const Default = () => <SortControl onSortChange={action('onSortChange')} />;
