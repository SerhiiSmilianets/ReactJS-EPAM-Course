
import '../components-styles/MovieForm.scss';

const MovieForm = ({movieData, onSubmit}) => {
    return (
        <div className='movie-form__container'>
            <form action={onSubmit}>
                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_title">Title</label>
                        <input id="movie_title" name="movie_title" type="text" placeholder="Movie title" defaultValue={movieData && movieData.title ? movieData.title : ""}/>
                    </div>

                    <div className='movie-form__field-column'>
                        <label htmlFor="movie_release_date">Release Date</label>
                        <input id="movie_release_date" name="movie_release_date" type="text" placeholder="Select date" defaultValue={movieData && movieData.release_date ? movieData.release_date  : ""}/>
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_poster_url">Movie URL</label>
                        <input id="movie_poster_url" name="movie_poster_url" type="text" placeholder="https://" defaultValue={movieData && movieData.poster_path ? movieData.poster_path  : ""}/>
                    </div>

                    <div className='movie-form__field-column'>
                        <label htmlFor="movie_rating">Rating</label>
                        <input id="movie_rating" name="movie_rating" type="number" placeholder="7.8" defaultValue={movieData && movieData.vote_average  ? movieData.vote_average  : ""}/>
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_genre">Genre</label>
                        <select name="movie_genre" id="movie_genre">
                            <option value="">Select Genre</option>
                        </select>
                    </div>
                    <div className='movie-form__field-column'>
                        <label htmlFor="movie_runtime">Runtime</label>
                        <input id="movie_runtime" name="movie_runtime" type="number" placeholder="minutes" defaultValue={movieData && movieData.runtime ? movieData.runtime : ""}/>
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column text-area__container'>
                        <label htmlFor="movie_overview">Overview</label>
                        <textarea id="movie_overview" name="movie_overview" type="textarea" placeholder="Movie description" defaultValue={movieData && movieData.overview ? movieData.overview  : ""}/>
                    </div>
                </div>
                

                <div className='movie-form__row form-buttons__container'>
                    <button type='reset'>Reset</button>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm

