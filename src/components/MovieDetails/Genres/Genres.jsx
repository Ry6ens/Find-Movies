import styles from "./Genres.module.scss";
import PropTypes from "prop-types";

export default function Genres({ movie }) {
  return (
    <section>
      <ul className={styles.genresList}>
        {movie.genres.map(({ id, name }) => (
          <li key={id} className={styles.genresItem}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}

Genres.propType = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    })
  ),
};
