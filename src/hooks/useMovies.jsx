import { useState, useEffect } from 'react';

export const useMovies = (finalQuery) => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    

    useEffect(() => {
        const fetchMovies = async () => {
          if (!finalQuery) return;
          try {
            setIsLoading(true);
            setError(error => '');
    
            const res = await fetch(`https://www.omdbapi.com/?apikey=f2ce3029&s=${finalQuery}`);
            if (!res.ok) {
              throw new Error(`Something went wrong (CODE: ${res.status})`);
            }
            const data = await res.json();
            if (data.Response === 'False') {
              throw new Error(`No movies found with the name "${finalQuery}"`);
            }
            setMovies(data.Search);
          } catch (err) {
            setError(error => err + ' ');
          } finally {
            setIsLoading(false);
            // setFinalQuery(finalQuery => '');
            // setQuery(query => '');
          }
        }
        fetchMovies();
      }, [finalQuery]);
    


    return { movies, isLoading, error };
};