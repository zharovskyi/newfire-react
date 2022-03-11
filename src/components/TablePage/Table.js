import { DataGrid } from "@mui/x-data-grid";
import { rows, columns } from "./data";

function Table() {
  return (
    <>
      <DataGrid rows={rows} columns={columns} />
    </>
  );
}

export default Table;
