/* eslint-disable no-debugger */
/* eslint-disable no-undef */
import { shallowEqual, useDispatch } from "react-redux";
import Table from "../../shared/Table/Table";
import Button from "@mui/material/Button";
import styles from "./index.module.scss";
import { styled } from "@mui/material/styles";
import { OutlinedInput, InputAdornment } from "@mui/material";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";
import { useSelector } from "react-redux";
import { loadDataAction, loadDataSearchAction } from "./redux/actions";
import { useEffect } from "react";

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
  // const { currentTime } = useSelector((store) => store.tableReducer);
  const { currentTime, search } = useSelector(
    ({ tableReducer: { currentTime, search } }) => ({
      currentTime,
      search,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log("e.target.value :>> ", e.target.value);
    dispatch(loadDataSearchAction(e.target.value));
  };

  // useEffect(() => {
  //   console.log("search", search);
  //   dispatch(loadDataSearchAction(search));
  // }, [search]);

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
            value={search}
            onChange={handleChange}
          />
          {currentTime && (
            <div style={{ fontSize: "1.125rem" }}>
              Last updated {currentTime}
            </div>
          )}
          <Button
            variant="contained"
            className={styles.btn}
            startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
            onClick={() => dispatch(loadDataAction())}
          >
            Додати рецепт
          </Button>
        </div>
        <Table />
      </div>
    </>
  );
};

export default TablePage;
