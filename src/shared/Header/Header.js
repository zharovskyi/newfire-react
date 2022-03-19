import Logo from "../Logo";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { BrowserRouter as Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        <Button variant="contained">Log in</Button>
      </Container>
    </header>
  );
};

export default Header;
