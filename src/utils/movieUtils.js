const getRuntimeFormatted = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return [hours, 'h',' ', minutes, 'min'].join('')
}

const getReleaseYear = (release_date) => {
    return (new Date(release_date).getFullYear())
}

export {
    getRuntimeFormatted,
    getReleaseYear
}
