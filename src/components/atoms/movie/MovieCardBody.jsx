

const MovieCardBody = ({ movieInfo }) => {
    return (
        <div className="movie-card-body">
            <div className="movie-card-body-description">{movieInfo.Plot}</div>
            <div className="movie-info">Starring: {movieInfo.Actors}</div>
            <div className="movie-info">Directed by: {movieInfo.Director}</div>
        </div>
    );
}

export default MovieCardBody;