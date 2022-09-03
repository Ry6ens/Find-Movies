import styles from "./Rating.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as IconStar } from "../../../img/star.svg";

export default function Rating({ movie }) {
  return (
    <>
      <h3 className={styles.ratingTitle}>Rating</h3>
      <div className={styles.ratingStarVoteCount}>
        <IconStar className={styles.iconStar} />
        <div>
          <p>
            <span className={styles.ratingVote}>
              {movie.vote_average.toFixed(1)}
            </span>
            /10
          </p>
          <p className={styles.ratingVoteCount}>{movie.vote_count}k</p>
        </div>
      </div>
    </>
  );
}

Rating.propType = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
    })
  ),
};
