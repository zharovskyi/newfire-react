import React from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { editRowType } from "../../components/TablePage/redux/actions";

type Rows = {
  rows: {
    id: number;
    name: string;
    type: string;
    alcohol: number;
    bittenesrs: number;
    capacity: number;
  }[];
};

const TableBodyList = ({ rows }: Rows) => {
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
};

export default TableBodyList;
