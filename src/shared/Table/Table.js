import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changePageAction,
  changeRowsPerPageAction,
  clearTableReducerAction,
  loadDataAction,
} from "../../components/TablePage/redux/actions";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./TableHead";
import TableBodyList from "./TableBody";
import { TablePagination } from "@mui/material";
import LoaderSpinner from "../LoaderSpinner";

const headCells = [
  {
    id: "name",
    label: "Name of recipe",
  },
  {
    id: "type",
    label: "Type of beer",
  },
  {
    id: "alcohol",
    label: "Alcohol",
  },
  {
    id: "bittenesrs ",
    label: "Bittenesrs",
  },
  {
    id: "capacity",
    label: "Capacity",
  },
  {
    id: "edit",
    label: "Edit",
  },
];
const EnhancedTable = () => {
  const { loading, beerData, limit, page } = useSelector(
    ({ tableReducer: { loading, beerData, limit, page } }) => ({
      loading,
      beerData,
      limit,
      page,
    }),
    shallowEqual,
  );
  const total = +beerData?.total;
  const rows = beerData?.data;
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
        {loading ? (
          <LoaderSpinner />
        ) : (
          <>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <EnhancedTableHead headCells={headCells} />
                <TableBodyList rows={rows} />
              </Table>
            </TableContainer>

            {beerData?.data?.length > 1 && (
              <TablePagination
                rowsPerPageOptions={[2, 4, 6]}
                component="div"
                count={total}
                page={page}
                rowsPerPage={limit}
                onRowsPerPageChange={(event) => {
                  return dispatch(changeRowsPerPageAction(event.target.value));
                }}
                onPageChange={(event, newPage) => {
                  return dispatch(changePageAction(newPage));
                }}
              />
            )}
          </>
        )}
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
