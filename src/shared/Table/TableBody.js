import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export default function TableBodyList({
  order,
  rows,
  page,
  rowsPerPage,
  orderBy,
}) {
  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover key={row.name + row.type}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <TableCell align="left">{row.alcohol}</TableCell>
              <TableCell align="left">{row.bittenesrs}</TableCell>
              <TableCell align="left">{row.capacity}</TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
}
