import { Container } from "./Container/Container";
import Header from "./Header/Header";
import UserRoutes from "./UserRoutes";

function App() {
  return (
    <>
      <Header />
      <Container>
        <UserRoutes />
      </Container>
    </>
  );
}

export default App;
