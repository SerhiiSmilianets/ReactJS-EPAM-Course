import React, { FormEvent } from 'react';
import '../styles/MovieForm.scss';
import {GENRE_LIST} from '../constants'

interface MovieData {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: string[];
  runtime: number;
  overview: string;
}

interface MovieFormProps {
  movieData?: MovieData;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  isDeleteForm: boolean;
}

const MovieForm: React.FC<MovieFormProps> = ({movieData, onSubmit, isDeleteForm}) => {
    if (isDeleteForm) {
        return (
            <div className='movie-form__container'>
                <p>Are you sure you want delete this movie?</p>
                <form onSubmit={onSubmit}>
                    <div className='movie-form__row form-buttons__container'>
                        <button className='btn submit' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className='movie-form__container'>
            <form onSubmit={onSubmit}>
                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_title">Title</label>
                        <input id="movie_title" name="movie_title" type="text" placeholder="Movie title" defaultValue={movieData?.title || ""} />
                    </div>

                    <div className='movie-form__field-column right'>
                        <label htmlFor="movie_release_date">Release Date</label>
                        <input id="movie_release_date" name="movie_release_date" type="text" placeholder="Select date" defaultValue={movieData?.release_date || ""} />
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_poster_url">Movie URL</label>
                        <input id="movie_poster_url" name="movie_poster_url" type="text" placeholder="https://" defaultValue={movieData?.poster_path || ""} />
                    </div>

                    <div className='movie-form__field-column right'>
                        <label htmlFor="movie_rating">Rating</label>
                        <input id="movie_rating" name="movie_rating" type="number" placeholder="7.8" defaultValue={movieData?.vote_average || ""} />
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column left'>
                        <label htmlFor="movie_genre">Genre</label>
                        <select name="movie_genre" id="movie_genre" defaultValue={movieData?.genres || ""}>
                            <option value="">Select Genre</option>
                            {GENRE_LIST.map((item) =>
                                <option key={item} value={item}>{item}</option>
                            )}
                        </select>
                    </div>
                    <div className='movie-form__field-column right'>
                        <label htmlFor="movie_runtime">Runtime</label>
                        <input id="movie_runtime" name="movie_runtime" type="number" placeholder="minutes" defaultValue={movieData?.runtime || ""} />
                    </div>
                </div>

                <div className='movie-form__row'>
                    <div className='movie-form__field-column text-area__container'>
                        <label htmlFor="movie_overview">Overview</label>
                        <textarea id="movie_overview" name="movie_overview" placeholder="Movie description" defaultValue={movieData?.overview || ""} />
                    </div>
                </div>

                <div className='movie-form__row form-buttons__container'>
                    <button className='btn reset' type='reset'>Reset</button>
                    <button className='btn submit' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm
