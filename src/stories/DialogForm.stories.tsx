import React from 'react';
import { Story, Meta } from '@storybook/react';
import DialogOpenButton from '../components/DialogOpenButton';
import {DialogOpenButtonProps} from '../types'

export default {
  title: 'GlobalMentoringProgram/DialogOpenButton',
  component: DialogOpenButton,
} as Meta;

const Template: Story<DialogOpenButtonProps> = (args: DialogOpenButtonProps) => <DialogOpenButton {...args} />;

export const AddMovie = Template.bind({});
AddMovie.args = {
  movieData: undefined,
  onDialogFormSubmit: () => {},
  isDeleteForm: false,
  dialogTitle: 'Add Movie',
};

export const EditMovie = Template.bind({});
EditMovie.args = {
  movieData: {
    id: '1',
    title: 'Example Movie',
    release_date: '2022-01-01',
    poster_path: 'https://example.com/poster.jpg',
    vote_average: 7.8,
    genres: ['Crime'],
    runtime: 120,
    overview: 'This is an example movie.',
  },
  onDialogFormSubmit: () => {},
  isDeleteForm: false,
  dialogTitle: 'Edit Movie',
};

export const DeleteMovie = Template.bind({});
DeleteMovie.args = {
  movieData: {
    id: '1',
    title: 'Example Movie',
    release_date: '2022-01-01',
    poster_path: 'https://example.com/poster.jpg',
    vote_average: 7.8,
    genres: ['Crime'],
    runtime: 120,
    overview: 'This is an example movie.',
  },
  onDialogFormSubmit: () => {},
  isDeleteForm: true,
  dialogTitle: 'Delete Movie',
};