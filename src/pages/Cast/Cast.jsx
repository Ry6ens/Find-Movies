import styles from "./Cast.module.scss";

import { fetchGetMovieCredits } from "../../service/api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchCredits();

    async function fetchCredits() {
      try {
        const data = await fetchGetMovieCredits(movieId);
        console.log(data);

        setCredits(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <section>
      <ul className={styles.creditList}>
        {credits &&
          credits.map(({ id, name, character, profile_path }) => (
            <li key={id} className={styles.creditItem}>
              <div className={styles.imgOverlay}>
                {profile_path !== null && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    className={styles.img}
                  />
                )}
              </div>
              <div>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
