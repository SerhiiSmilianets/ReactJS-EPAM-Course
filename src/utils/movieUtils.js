import {GENRE_LIST} from '../constants'

const getRuntimeFormatted = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return [hours, 'h',' ', minutes, 'min'].join('')
}

const getReleaseYear = (release_date) => {
    return (new Date(release_date).getFullYear())
}

const getMovieItem = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();
    return resData
}

const getMoviesList = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();
    return resData.data;
}

const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
};

const getFirstSelectedGenre = (movieGenres) => {
    const selectedGenre = movieGenres.find((genre) => {
        return GENRE_LIST.indexOf(genre) > -1
    })

    return selectedGenre ? selectedGenre : GENRE_LIST[0]
}

export {
    getRuntimeFormatted,
    getReleaseYear,
    getMovieItem,
    getMoviesList,
    addImageFallback,
    getFirstSelectedGenre
}
