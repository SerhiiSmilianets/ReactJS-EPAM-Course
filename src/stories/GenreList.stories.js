import GenreList from '../components/GenreList';

export default {
    title: 'Example/GenreList',
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

export const Default = {}

export const WithEmptyGenresList = {
    args: {
        genresList: []
    }
};


