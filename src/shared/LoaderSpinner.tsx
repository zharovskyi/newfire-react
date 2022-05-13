import React from "react";
import { CircularProgress, Container } from "@mui/material";
import styles from "./Table/Table.module.scss";

const LoaderSpinner = () => {
  return (
    <>
      <div className={styles.loader}>
        <Container>
          <CircularProgress disableShrink />
        </Container>
      </div>
    </>
  );
};
export default LoaderSpinner;
