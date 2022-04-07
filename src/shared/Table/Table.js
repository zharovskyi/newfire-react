/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDataAction, loadDataFailureAction } from "../../components/TablePage/redux/actions";

import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./TableHead";
import TableBodyList from "./TableBody";

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
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("type");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { loading, beerData } = useSelector((store) => store.tableReducer);
  const headCells = beerData.headCells;
  const rows = beerData.rows;
  const dispatch = useDispatch();
  console.log("headCells++ ", headCells);
  useEffect(() => {
    // const error = new Error();
    dispatch(loadDataAction());
    // debugger;

    // if (error) {
    //   dispatch(loadDataFailureAction(error.name));
    // }
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              // rowCount={rows.length}
              headCells={headCells}
            />
            <TableBodyList
              order={order}
              rows={rows}
              page={page}
              rowsPerPage={rowsPerPage}
              orderBy={orderBy}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
