import styles from "./Reviews.module.scss";

import { fetchGetMovieReviews } from "../../service/api";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "react-moment";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();

    async function fetchReviews() {
      try {
        const data = await fetchGetMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      <section>
        <ul className={styles.reviewsList}>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content, updated_at }) => {
              return (
                <li key={id} className={styles.reviewsItem}>
                  <p className={styles.reviewsContent}>{content}</p>
                  <div className={styles.reviewsDetails}>
                    <p className={styles.reviewsAuthor}>{author}</p>
                    <Moment className={styles.reviewsDate} format="D MMM YYYY">
                      {updated_at}
                    </Moment>
                  </div>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </section>
    </>
  );
}
