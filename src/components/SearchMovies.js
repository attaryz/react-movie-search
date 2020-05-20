import React,{useState} from 'react'
import MovieCard from './MovieCard'
import styles from './SearchMovies.module.css'


export default function SearchMovies() {
    const [query,setQuery] =useState('')
     const [movies, setMovies] = useState([]);
    const SearchMovie = async (e) => {
      e.preventDefault();
     

      const url = `https://api.themoviedb.org/3/search/movie?api_key=3fe73a4bbd76c67bfd3a23034a2e25e6&language=en-US&query=${query}&page=1&include_adult=false`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <>
        <form className={styles.form} onSubmit={SearchMovie}>
          <label htmlFor="query" className={styles.label}>
            Movie Name
          </label>
          <input
            type="text"
            name="query"
            placeholder="Search"
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
        <div className={styles.cardList}>
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </>
    );
}
  