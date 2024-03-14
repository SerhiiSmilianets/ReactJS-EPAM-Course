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

const getMoviesList = async (url) => {
    const resData = await fetchMovies(url);
    return resData.data;
}

export {
    getRuntimeFormatted,
    getReleaseYear,
    fetchMovies,
    getMoviesList
}
