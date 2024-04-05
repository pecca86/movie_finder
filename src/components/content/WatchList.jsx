import WatchListStats from "./WatchListStats";
import MovieCard from "../atoms/movie/MovieCard";
import WatchListItem from "./WatchListItem";
import MovieCardBody from "../atoms/movie/MovieCardBody";
import MovieCardFooter from "../atoms/movie/MovieCardFooter";
import MovieCardHeader from "../atoms/movie/MovieCardHeader";
import Banner from "../atoms/utils/Banner";
import Loader from "../atoms/utils/Loader";
import StarBar from "../atoms/rating/StarBar";
import Button from "../atoms/button/Button";
import ResponsiveImage from "../atoms/img/ResponsiveImage";
import { useState, useEffect } from "react";

const WatchList = ({ isSelected, handleCloseMovieCard, movieId, watchList, onHandleAddToWatchList, onHandleRemoveFromWatchList, handleSelectedMovie }) => {

    // const [toggle, setToggle] = useState(isSelected);
    const [error, setError] = useState('');
    const [currentMovie, setCurrentMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!movieId) return;

        const fetchMovie = async () => {
            try {
                setIsLoading(true);
                setError(error => '');

                const res = await fetch(`https://www.omdbapi.com/?apikey=f2ce3029&i=${movieId}`);
                if (!res.ok) {
                    throw new Error(`Something went wrong (CODE: ${res.status})`);
                }
                const data = await res.json();
                if (data.Response === 'False') {
                    throw new Error(`No movies found with the ID "${movieId}"`);
                }

                setCurrentMovie(data);
            } catch (err) {
                setError(error => err + ' ');
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovie();
    }, [movieId]);

    if (isSelected) {
        let isMovieAlreadyAdded = watchList.some(movie => movie.imdbID === currentMovie.imdbID);

        return (
            <div className="watch-list">
                {isLoading && <Loader />}
                {!isLoading && error && (<Banner style='danger'>{error}</Banner>)}
                {!isLoading && !error && !currentMovie && <Banner message="No movie found..." />}
                {!isLoading && !error && (<MovieCard>
                    <div className="close" onClick={() => handleCloseMovieCard()}></div>
                    <MovieCardHeader movieData={currentMovie} />
                    <MovieCardBody movieInfo={currentMovie} />
                    <MovieCardFooter>
                        <StarBar rating={4} />
                        <Button style={isMovieAlreadyAdded ? 'primary-btn disabled' : 'primary-btn'} onClick={() => onHandleAddToWatchList(currentMovie)}>
                            {isMovieAlreadyAdded ? 'Added in watch list' : 'Add to watch list'}
                        </Button>
                    </MovieCardFooter>
                </MovieCard>)}
            </div>
        )
    }
    return (
        <div className="watch-list-list">
            <WatchListStats movies={watchList} />
            {watchList && watchList.map((movie, index) => {
                return (
                    <div key={movie.imdbID} className="item-container" onClick={() => handleSelectedMovie(movie.imdbID)}>
                        <WatchListItem movie={movie} key={movie.imdbID}>
                            <div><ResponsiveImage src={movie.Poster} alt='movie-poster' className='movie-list-item-img' /></div>
                            <div className="watch-list-item">
                                <div className="title">{movie.Title}</div>
                                <div className="rating">⭐️ {movie.imdbRating} </div>
                                <div className="duration">⌛️ {movie.Runtime}</div>
                                <div className="remove" onClick={() => onHandleRemoveFromWatchList(movie.imdbID)}>❌</div>
                            </div>
                        </WatchListItem>
                    </div>
                )
            })}
        </div>
    )
}

export default WatchList;