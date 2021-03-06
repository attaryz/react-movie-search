import React from 'react';

import styles from './MovieCard.module.css'


export default function MovieCard({movie})  {
    return (
      <div className={styles.card}>
        <img
          className={styles.cardImage}
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
          alt={movie.title + "poster"}
        />
        <div className="card--content">
          <h3 className={styles.cardTitle}>{movie.title}</h3>
          <p className={styles.info}>
            <small>RELEASE DATE: {movie.release_date}</small>
          </p>
          <p className={styles.info}>
            <small>RATING: {movie.vote_average}</small>
          </p>
          <p className={styles.info}>{movie.overview}</p>
        </div>
      </div>
    );
}


