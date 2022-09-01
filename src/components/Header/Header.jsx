import styles from "./Header.module.scss";

import Navigation from "../Navigation/Navigation";
import { Container } from "../Container/Container";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}
