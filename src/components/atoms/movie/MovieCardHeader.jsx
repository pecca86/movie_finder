import ResponsiveImage from "../img/ResponsiveImage";

const MovieCardHeader = ({ movieData }) => {
    return (
        <div className="movie-card-header">
            <ResponsiveImage
                className="movie-card-header__image"
                alt="Movie Title"
                src={movieData.Poster} />
            <div>
                <div className="movie-card-header__title">{movieData.Title}</div>
                <div className="movie-card-header__year">Released: {movieData.Released}</div>
                <div className="movie-card-header__genre">Genre: {movieData.Genre}</div>
                <div className="movie-card-header__rating">IMDB: {movieData.imdbRating}/10 ⭐️</div>
            </div>
        </div>
    );
}

export default MovieCardHeader;