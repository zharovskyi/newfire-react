import Header from "../../shared/Header/Header";
import Table from "../../shared/Table/Table";
import { headCells, rows } from "./data";
import Button from "@mui/material/Button";
import styles from "./index.module.scss";

const TablePage = () => {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <div className={styles.btn}>
          <Button variant="contained">Додати рецепт</Button>
        </div>
        <Table headCells={headCells} rows={rows} />
      </div>
    </>
  );
};

export default TablePage;
