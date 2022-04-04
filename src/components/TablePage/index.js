import Table from "../../shared/Table/Table";
import { headCells, rows } from "./data";
import Button from "@mui/material/Button";
import styles from "./index.module.scss";
import { styled } from "@mui/material/styles";
import { OutlinedInput, InputAdornment } from "@mui/material";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { width: 320, boxShadow: theme.customShadows.z8 },
  "& fieldset": {
    borderWidth: "1px !important",
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));
const TablePage = () => {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.btnContainer}>
          <SearchStyle
            placeholder="Шукати рецепт..."
            startAdornment={
              <InputAdornment position="start">
                <IconifyButtonIcon
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled" }}
                />
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            className={styles.btn}
            startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
          >
            Додати рецепт
          </Button>
        </div>
        <Table headCells={headCells} rows={rows} />
      </div>
    </>
  );
};

export default TablePage;
