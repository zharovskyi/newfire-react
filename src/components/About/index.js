import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { headCells } from "../TablePage/data";
// import { createStore } from "redux";
import React, { useState } from "react";
// const reducer = (state = {}, action) => state;

// const store = createStore(reducer);
const conteinerStyle = {
  paddingTop: "100px",
};
const About = () => {
  const [loading, setLoading] = useState(false);
  const [getData, setGetData] = useState([]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setGetData(headCells), 2000);
  };
  console.log("getData :>> ", getData);
  return (
    <div>
      {loading ? (
        <Container style={conteinerStyle}>
          <CircularProgress disableShrink />
        </Container>
      ) : (
        <Button variant="contained" onClick={handleClick}>
          Get Data
        </Button>
      )}
      {getData.length > 0 && (
        <TableHead>
          <TableRow>
            {getData.map((headCell) => (
              <TableCell key={headCell.id} align="left" padding="normal">
                <TableSortLabel>{headCell.label}</TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}
    </div>
  );
};
export default About;
