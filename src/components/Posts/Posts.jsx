import styles from "./Post.module.scss";
import plugImg from "../../img/plugIMG.jpg";
import { Link, useLocation } from "react-router-dom";
import Moment from "react-moment";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default function Posts({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.postsList}>
      {movies &&
        movies.map((movie) => (
          <li key={nanoid()}>
            <Link
              className={styles.postsItem}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.poster_path !== null ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  width="172"
                  height="258"
                />
              ) : (
                <img src={plugImg} alt="" width="172" height="258"></img>
              )}

              <h2 className={styles.postTitle}>{movie.title}</h2>
              <Moment className={styles.postDate} format="YYYY">
                {movie.release_date}
              </Moment>
            </Link>
          </li>
        ))}
    </ul>
  );
}

Posts.propType = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
