import MovieCardHeader from "./MovieCardHeader";
import MovieCardBody from "./MovieCardBody";
import MovieCardFooter from "./MovieCardFooter";

const movieInfo = [
    {
        "Title": "Saving Private Ryan",
        "Year": "1998",
        "Rated": "R",
        "Released": "24 Jul 1998",
        "Runtime": "169 min",
        "Genre": "Drama, War",
        "Director": "Steven Spielberg",
        "Writer": "Robert Rodat",
        "Actors": "Tom Hanks, Matt Damon, Tom Sizemore",
        "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "Language": "English, French, German, Czech",
        "Country": "United States",
        "Awards": "Won 5 Oscars. 79 wins & 75 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.6/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "91/100"
            }
        ],
        "Metascore": "91",
        "imdbRating": "8.6",
        "imdbVotes": "1,486,615",
        "imdbID": "tt0120815",
        "Type": "movie",
        "DVD": "27 May 2016",
        "BoxOffice": "$217,049,603",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    }
]

const MovieCard = ({ children }) => {
    return (
        <div className="movie-card">
            {children}
        </div>
    )
};

export default MovieCard;