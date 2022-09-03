import styles from "./Overview.module.scss";
import PropTypes from "prop-types";

export default function Overview({ movie }) {
  return (
    <section>
      <p className={styles.overviewText}>{movie.overview}</p>
    </section>
  );
}

Overview.propType = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      overview: PropTypes.string,
    })
  ),
};
