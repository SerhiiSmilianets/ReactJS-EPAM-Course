import MovieDetails from '../components/MovieDetails';

export default {
    title: 'GlobalMentoringProgram/MovieDetails',
    component: MovieDetails,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
        default: 'dark',
        },
    },
};

export const Default = {
    args: {
        poster_path: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg", 
        title: "Star Wars: The Last Jedi", 
        genres: ["Fantasy", "Adventure","Science Fiction"],
        release_date: "2017-12-13",
        vote_average: 7.1,
        runtime: 152,
        overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
    }
}

