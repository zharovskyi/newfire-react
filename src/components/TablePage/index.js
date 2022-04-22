import { shallowEqual, useDispatch } from "react-redux";
import Table from "../../shared/Table/Table";
import styles from "./index.module.scss";
import { styled } from "@mui/material/styles";
import { OutlinedInput, InputAdornment } from "@mui/material";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";
import { useSelector } from "react-redux";
import { loadDataSearchAction } from "./redux/actions";
import ModalContainer from "../../shared/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { currentTime, search } = useSelector(
    ({ tableReducer: { currentTime, search } }) => ({
      currentTime,
      search,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(loadDataSearchAction(e.target.value));
  };

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
          <ModalContainer />
          
        </div>
        <Table />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default TablePage;
