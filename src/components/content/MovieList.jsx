import MovieListItem from "../atoms/movie/MovieListItem";
import ResponsiveImage from "../atoms/img/ResponsiveImage";

const MovieList = ({ movies, children, setSelectedMovieId, handleSelectedMovie }) => {

    const [loading, error] = children;

    if (loading) {
        return (
            <div className="movie-list">
                {children}
            </div>
        );
    }

    if (error) {
        return (
            <div className="movie-list">
                {children}
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div className="movie-list">
                <h1 className="movie-list-heading">Please type in the search to find movies...</h1>
            </div>
        );
    }

    return (
        <div className="movie-list">
            <h1 className="movie-list-heading">Results</h1>
            {movies.map((movie, _) => {
                return (<MovieListItem key={movie.imdbID}>
                    <div className={"movie-list-item " + movie.imdbID} onClick={() => handleSelectedMovie(movie.imdbID)}>
                        <ResponsiveImage src={movie.Poster} alt='movie-img' className='movie-list-item-image'/>
                        <div className='movie-list-item-title'>{movie.Title}</div>
                        <div className='movie-list-item-info'> 📅 {movie.Year}</div>
                    </div>
                </MovieListItem>)
            })}
        </div>
    );
}

export default MovieList;