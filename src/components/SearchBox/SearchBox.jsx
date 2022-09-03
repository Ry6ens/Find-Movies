import styles from "./SearchBox.module.scss";
import PropTypes from "prop-types";

export default function SearchBox({ getSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements.search.value;
    getSearch(query);

    e.currentTarget.reset();
  };

  return (
    <div className={styles.searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    </div>
  );
}

SearchBox.propType = {
  getSearch: PropTypes.func,
};
