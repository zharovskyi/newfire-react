import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import { visuallyHidden } from "@mui/utils";

export default function EnhancedTableHead({ headCells }) {
  return (
    <TableHead>
      <TableRow>
        {headCells?.length > 0 &&
          headCells.map((headCell) => (
            <TableCell key={headCell.id} align="left" padding="normal">
              <TableSortLabel>
                {headCell.label}
                <Box component="span" sx={visuallyHidden}></Box>
              </TableSortLabel>
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
  );
}
