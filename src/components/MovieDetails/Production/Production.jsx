import styles from "./Production.module.scss";
import PropTypes from "prop-types";

export default function Production({ movie }) {
  return (
    <section>
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
    </section>
  );
}

Production.propType = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      production_companies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          logo_path: PropTypes.string,
        })
      ),
    })
  ),
};
