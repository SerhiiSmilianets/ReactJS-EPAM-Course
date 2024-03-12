const getRuntimeFormatted = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return [hours, 'h',' ', minutes, 'min'].join('')
}

const getReleaseYear = (release_date) => {
    return (new Date(release_date).getFullYear())
}

const fetchMovies = async (url) => {
    const response = await fetch(url);
    const resData = await response.json();

    return resData
}

// const getMovieById = (movieId) => {
//     return fetchMovies([MOVIE_API_URL, movieId].join('/'))
// }

export {
    getRuntimeFormatted,
    getReleaseYear,
    fetchMovies,
}
