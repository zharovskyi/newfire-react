import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { editRowType } from "../../components/TablePage/redux/actions";

export default function TableBodyList({ rows }) {
  const dispatch = useDispatch();

  return (
    <>
      <TableBody>
        {rows?.length ? (
          rows.map((row) => {
            return (
              <TableRow hover key={row.id}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.alcohol}</TableCell>
                <TableCell align="left">{row.bittenesrs}</TableCell>
                <TableCell align="left">{row.capacity}</TableCell>
                <TableCell align="left">
                  <IconButton
                    aria-label="edit"
                    id={row.id}
                    onClick={() => {
                      dispatch(editRowType(row.id));
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow hover key="1">
            <TableCell align="center">Not found</TableCell>
          </TableRow>
        )}
      </TableBody>
    </>
  );
}
