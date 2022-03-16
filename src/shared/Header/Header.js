import Logo from "../Logo";
import styles from "./Header.module.scss";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Logo />
        <Button variant="contained">Log in</Button>
      </Container>
    </header>
  );
};

export default Header;
