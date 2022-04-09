import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function TableBodyList({ rows }) {
  return (
    <TableBody>
      {rows &&
        rows.map((row) => {
          return (
            <TableRow hover key={row.name}>
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
