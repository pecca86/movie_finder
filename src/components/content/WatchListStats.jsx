import { Fragment } from "react";


const WatchListStats = ({ movies }) => {

    let totalDuration = 0;
    let moviesCount = 0;
    let avgRating = 0;
    let duration = 0;

    if (movies) {
        totalDuration = movies.reduce((acc, movie) => {
            duration = movie['Runtime'].split(' ')[0];
            return acc + parseInt(duration);
        }, 0);

        moviesCount = movies.length;

        let totalRating = movies.reduce((acc, movie) => {
            let rating = parseFloat(movie['imdbRating']);
            return acc + rating;
        }, 0);

        avgRating = (totalRating / moviesCount).toFixed(1);
    }

    return (
        <Fragment>
            <p className="stats-header">Watchlist Stats</p>
            <div className="watchlist-stats">
                <div className="stats">
                    <p style={{ color: 'white', fontWeight: '700' }}>Number of movies: {moviesCount}</p>
                    <p>Avg. rating: {avgRating} ⭐️</p>
                    <p>Total duration: {totalDuration} min ⌛️</p>
                </div>
            </div>
        </Fragment>
    );
};

export default WatchListStats;