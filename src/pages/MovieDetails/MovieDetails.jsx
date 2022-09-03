import styles from "./MovieDetails.module.scss";

//Hooks
import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";

//Components
import Moment from "react-moment";
import { fetchGetMovieDetails } from "../../service/api";
import YoutubeEmbed from "../../components/MovieDetails/YoutubeEmbed/YoutubeEmbed";
import AdditionalTitle from "../../components/MovieDetails/AdditionalTitle/AdditionalTitle";
import ButtonBack from "../../components/MovieDetails/ButtonBack/ButtonBack";
import ImgEmbed from "../../components/MovieDetails/ImgEmbed/ImgEmbed";
import Production from "../../components/MovieDetails/Production/Production";
import Genres from "../../components/MovieDetails/Genres/Genres";
import Overview from "../../components/MovieDetails/Overview/Overview";
import Rating from "../../components/MovieDetails/Rating/Rating";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    fetchMovie();

    async function fetchMovie() {
      try {
        const data = await fetchGetMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  const singlePageRegexp = location.pathname;
  const isSingelPageCast = singlePageRegexp.includes("cast");
  const isSingelPageReviews = singlePageRegexp.includes("reviews");

  const castLink = isSingelPageCast
    ? `/movies/${movieId}`
    : `/movies/${movieId}/cast`;

  const reviewstLink = isSingelPageReviews
    ? `/movies/${movieId}`
    : `/movies/${movieId}/reviews`;

  return (
    <main>
      <ButtonBack backLinkHref={backLinkHref} />

      {movie && (
        <>
          <section className={styles.sectionTitle}>
            <div>
              <h1 className={styles.title}>{movie.title}</h1>
              <h2 className={styles.originalTitle}>
                Original title: {movie.original_title}
              </h2>
              <ul className={styles.detailsDivider}>
                <Moment format="YYYY">{movie.release_date}</Moment>
                <li className={styles.detailsRunTime}>
                  {Math.floor(movie.runtime / 60)}h{" "}
                  {Math.floor(movie.runtime % 60)}m
                </li>
              </ul>
            </div>
            <div className={styles.rating}>
              <Rating movie={movie} />
            </div>
          </section>

          <section className={styles.media}>
            <ImgEmbed movie={movie} />
            <YoutubeEmbed />
          </section>

          <Genres movie={movie} />
          <Overview movie={movie} />

          <section className={styles.sectionCastReviews}>
            <ul className={styles.informationList}>
              <li className={styles.informationItem}>
                <Link to={castLink} state={{ from: location.state.from }}>
                  <AdditionalTitle title="Top cast" />
                </Link>
              </li>

              <li>
                <Link to={reviewstLink} state={{ from: location.state.from }}>
                  <AdditionalTitle title="Reviews" />
                </Link>
              </li>
            </ul>
          </section>

          <Outlet />
          <Production movie={movie} />
        </>
      )}
    </main>
  );
}
