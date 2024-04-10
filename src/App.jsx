import Container from "./components/content/Container";
import Navbar from "./components/nav/Navbar";
import MovieList from "./components/content/MovieList";
import WatchList from "./components/content/WatchList";
import SearchBar from "./components/nav/SearchBar";
import Loader from "./components/atoms/utils/Loader";
import Banner from "./components/atoms/utils/Banner";
import { useEffect, useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useKey } from "./hooks/useKey";


function App() {

  const [finalQuery, setFinalQuery] = useState('');
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [watchList, setWatchList] = useLocalStorageState([], 'watchList')
  const {movies, isLoading, error} = useMovies(finalQuery);
  useKey('Escape', () => alert("You fag!"))

  const onHandleSelect = (movieId) => {
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
    if (watchList.some(watchListMovie => watchListMovie.imdbID === movie.imdbID)) return;
    
    // localStorage.setItem('watchList', JSON.stringify([...watchList, movie]));
    setWatchList(watchList => [...watchList, movie]);
    onShowBanner();
  }

  const onHandleRemoveFromWatchList = (movieId) => {
    setWatchList(watchList => watchList.filter(movie => movie.imdbID !== movieId));
  }

  const onHandleSearch = (e, searchTerm) => {
    e.preventDefault();
    setFinalQuery(finalQuery => searchTerm);
  }

  const handleCloseMovieCard = () => {
    setIsSelected(isSelected => false);
  }

  return (
    <div className="a">
      <Navbar>
        <h1>Movie List</h1>
        <SearchBar onHandleSearch={onHandleSearch} />
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