const MovieTile = ({movieData, onClick}) => {
    return (
        <>
            <div className="movie-tile">
                <img className="movie-tile_image" src={movieData.poster_path} alt={movieData.title} />
                <div className="movie-tile_header">
                    <h4 className="movie-tile_title">{movieData.title}</h4>
                    <span className="movie-tile_release">{(new Date(movieData.release_date).getFullYear())}</span>
                </div>
                <div className="movie-tile_footer">
                    <p className="movie-tile_genres">{(movieData.genres.join(', '))}</p>
                </div>
            </div>
        </>
    )
}

export default MovieTile