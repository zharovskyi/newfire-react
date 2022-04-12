import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";
import { useDispatch } from "react-redux";
import { loadTypeSortAction } from "../../components/TablePage/redux/actions";

export default function EnhancedTableHead({ headCells }) {
  const dispatch = useDispatch();
  return (
    <TableHead>
      <TableRow>
        {headCells?.length > 0 &&
          headCells.map((headCell) => (
            <TableCell key={headCell.id} align="left" padding="normal">
              <TableSortLabel
                // active={orderBy === headCell.id}
                // direction="desc"
                // onClick={createSortHandler(headCell.id)}
                id={headCell.id}
                onClick={() => dispatch(loadTypeSortAction(headCell.id))}
              >
                {headCell.label}
                <Box component="span" sx={visuallyHidden}></Box>
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}
