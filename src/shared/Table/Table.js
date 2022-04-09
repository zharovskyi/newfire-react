import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  clearTableReducerAction,
  loadDataAction,
} from "../../components/TablePage/redux/actions";

import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./TableHead";
import TableBodyList from "./TableBody";
import { CircularProgress, Container } from "@mui/material";
import styles from "./Table.module.scss";

const EnhancedTableToolbar = ({ numSelected }) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Інформація про пиво
      </Typography>
    </Toolbar>
  );
};

export default function EnhancedTable() {
  const { loading, beerData } = useSelector(
    ({ tableReducer: { loading, beerData } }) => ({
      loading,
      beerData,
    }),
    shallowEqual,
  );

  const headCells = beerData?.headCells;
  const rows = beerData?.rows;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataAction());
    return () => {
      dispatch(clearTableReducerAction());
    };
  }, [dispatch]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />

        {loading ? (
          <>
            <div className={styles.loader}>
              <Container>
                <CircularProgress disableShrink />
              </Container>
            </div>
          </>
        ) : (
          <>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead headCells={headCells} />
                <TableBodyList rows={rows} />
              </Table>
            </TableContainer>
          </>
        )}
      </Paper>
    </Box>
  );
}
