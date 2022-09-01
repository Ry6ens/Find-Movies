import styles from "./MovieDetails.module.scss";

import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import Moment from "react-moment";

import { fetchGetMovieDetails } from "../../service/api";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();

    async function fetchMovie() {
      try {
        const data = await fetchGetMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  return (
    <main>
      <div className={styles.btnBack}>
        <Link to="/">
          <svg
            className={styles.iconArrow}
            viewBox="0 0 32 32"
            width="12"
            height="12"
            fill="rgba(255, 255, 255, 0.7)"
          >
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
          </svg>
          Go Back
        </Link>
      </div>

      <section className={styles.section}>
        {movie && (
          <>
            <div className={styles.top}>
              <div className={styles.topTitle}>
                <h1 className={styles.title}>{movie.title}</h1>
                <p className={styles.originalTitle}>
                  Original title: {movie.original_title}
                </p>
                <ul className={styles.detailsDivider}>
                  <Moment format="YYYY">{movie.release_date}</Moment>
                  <li className={styles.detailsRunTime}>
                    {Math.floor(movie.runtime / 60)}h{" "}
                    {Math.floor(movie.runtime % 60)}m
                  </li>
                </ul>
              </div>
              <div className={styles.topDetails}>
                <p className={styles.topRating}>Rating</p>
                <div className={styles.toRatingLay}>
                  <div className={styles.iconStar}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgb(245, 197, 24)"
                      role="presentation"
                    >
                      <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p>
                      <span className={styles.topVote}>
                        {movie.vote_average.toFixed(1)}
                      </span>
                      /10
                    </p>
                    <p className={styles.topVoteCount}>{movie.vote_count}k</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.img}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                width="220"
              />
              <YoutubeEmbed />
            </div>
            <ul className={styles.genresList}>
              {movie.genres.map(({ id, name }) => (
                <li key={id} className={styles.genresItem}>
                  {name}
                </li>
              ))}
            </ul>
            <p className={styles.overview}>{movie.overview}</p>
            <ul className={styles.informationList}>
              <li className={styles.informationItem}>
                <Link to="cast">
                  <h3 className={styles.informationTitle}>
                    Top cast
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.informationArrow}
                      id="iconContext-chevron-right-inline"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                    </svg>
                  </h3>
                </Link>
              </li>

              <li>
                <Link to="reviews">
                  <h3 className={styles.informationTitle}>
                    <span>Reviews</span>
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.informationArrow}
                      id="iconContext-chevron-right-inline"
                      viewBox="0 0 24 24"
                      role="presentation"
                    >
                      <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
                    </svg>
                  </h3>
                </Link>
              </li>
            </ul>
            <Outlet />
            <h4 className={styles.productionTitle}>Production companies</h4>
            <ul className={styles.productionList}>
              {movie.production_companies &&
                movie.production_companies.map(({ id, logo_path }) => (
                  <li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
                      alt=""
                      width="96"
                    />
                  </li>
                ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
