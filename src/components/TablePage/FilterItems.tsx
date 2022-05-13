import React from "react";
import styles from "./index.module.scss";
import { styled } from "@mui/material/styles";
import { OutlinedInput, InputAdornment, Button } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadDataSearchAction, showModalType } from "./redux/actions";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";
import {  filterItemsSelector } from "./selectorTablePage";

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": { width: 320},
  "& fieldset": {
    borderWidth: "1px !important",
  },
}));

const FilterItems = () => {

  const { search, currentTime } = useSelector(filterItemsSelector,shallowEqual)

  const dispatch = useDispatch();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    dispatch(loadDataSearchAction(e.target.value));
  };

  const toggleModal = () => {
    dispatch(showModalType());
  };
  return (
    <>
      <div className={styles.btnContainer}>
        <SearchStyle
          placeholder="Type the recipe ..."
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
          <div style={{ fontSize: "1.125rem" }}>Last updated {currentTime}</div>
        )}
        <Button
          variant="contained"
          className={styles.btnAdd}
          startIcon={<IconifyButtonIcon icon="eva:plus-fill" sx={{ color: "#fff" }} />}
          onClick={toggleModal}
        >
          Add new recipe
        </Button>
      </div>
    </>
  );
};

export default FilterItems;
