import ThemeConfig from "./theme";
import TablePage from "./components/TablePage";
import styles from "./App.module.scss";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Logo from "./shared/Logo";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import About from "./components/About";

function App() {
  return (
    <ThemeConfig>
      <Router>
        <header className={styles.header}>
          <Container className={styles.container}>
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Головна</Link>
                </li>
                <li>
                  <Link to="/about">Про нас</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакти</Link>
                </li>
                <li>
                  <Button variant="contained">Log in</Button>
                </li>
              </ul>
            </nav>
          </Container>
        </header>
        <Switch>
          <Route exact path="/">
            <TablePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeConfig>
  );
}

function Contacts() {
  return <h2>Contacts</h2>;
}
export default App;
