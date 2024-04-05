import Container from "./components/content/Container";
import Navbar from "./components/nav/Navbar";
import MovieList from "./components/content/MovieList";
import WatchList from "./components/content/WatchList";
import SearchBar from "./components/nav/SearchBar";
import Button from "./components/atoms/button/Button";
import Loader from "./components/atoms/utils/Loader";
import Banner from "./components/atoms/utils/Banner";
import { useEffect, useState } from "react";


function App() {

  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [finalQuery, setFinalQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const onHandleSelect = (movieId) => {
    console.log("SELECTED MOVIE ID: ", movieId);
    setSelectedMovieId(selectedMovieId => movieId);
    setIsSelected(isSelected => true);
  };

  const onShowBanner = () => {
    setShowBanner(showBanner => true);
    setTimeout(() => {
      setShowBanner(showBanner => false);
    }, 1500);
  };

  const onHandleAddToWatchList = (movie) => {
    // Check if movie is already in watchlist
    if (watchList.some(watchListMovie => watchListMovie.imdbID === movie.imdbID)) return;

    setWatchList(watchList => [...watchList, movie]);
    onShowBanner();
  }

  const onHandleRemoveFromWatchList = (movieId) => {
    setWatchList(watchList => watchList.filter(movie => movie.imdbID !== movieId));
  }

  const onHandleSearch = (e) => {
    e.preventDefault();
    setFinalQuery(finalQuery => query);
  }

  const handleCloseMovieCard = () => {
    setIsSelected(isSelected => false);
  }

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setError(error => '');

        const res = await fetch(`https://www.omdbapi.com/?apikey=f2ce3029&s=${query}`);
        if (!res.ok) {
          throw new Error(`Something went wrong (CODE: ${res.status})`);
        }
        const data = await res.json();
        if (data.Response === 'False') {
          throw new Error(`No movies found with the name "${query}"`);
        }
        setMovies(data.Search);
      } catch (err) {
        setError(error => err + ' ');
      } finally {
        setIsLoading(false);
        setFinalQuery(finalQuery => '');
        setQuery(query => '');
      }
    }
    fetchMovies();
  }, [finalQuery]);

  return (
    <div className="a">
      <Navbar>
        <h1>Movie List</h1>
        <SearchBar onHandleSearch={onHandleSearch} query={query} setQuery={setQuery} />
      </Navbar>
      <Container>
        <MovieList movies={movies} setSelectedMovieId={setSelectedMovieId} handleSelectedMovie={onHandleSelect}>
          {isLoading && <Loader />}
          {!isLoading && error && (<Banner style='danger'>{error}</Banner>)}
        </MovieList>
        <WatchList
          isSelected={isSelected}
          handleCloseMovieCard={handleCloseMovieCard}
          movieId={selectedMovieId}
          watchList={watchList}
          onHandleAddToWatchList={onHandleAddToWatchList}
          onHandleRemoveFromWatchList={onHandleRemoveFromWatchList}
          showBanner={showBanner}
          handleSelectedMovie={onHandleSelect}
        />
      </Container>
    </div>
  );
}

export default App;