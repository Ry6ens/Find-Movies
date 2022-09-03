import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }) => {
  return isActive ? styles.activeLink : styles.link;
};

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={getClassName}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getClassName}>
        Movies
      </NavLink>
    </nav>
  );
}
