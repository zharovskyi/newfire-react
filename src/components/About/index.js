import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { requestBeerData } from "./redux/action";
import { showData } from "./redux/action";
import React, { useEffect } from "react";

const conteinerStyle = {
  paddingTop: "100px",
};
const About = () => {
  const { beerData, loading } = useSelector(({ beerData, loading }) => {
    return { beerData, loading };
  }, shallowEqual);
  // eslint-disable-next-line no-debugger
  // debugger;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(requestBeerData());

    setTimeout(() => {
      dispatch(showData(beerData));
    }, 1000);
  };
  useEffect(() => {
    try {
      fetch("http://localhost:3001/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log("data :>> ", data);
          return data;
        });
    } catch (error) {
      console.log("error :>> ", error);
    }
  }, []);
  return (
    <div style={conteinerStyle}>
      <Button variant="contained" onClick={handleClick} disabled={loading}>
        Get Data
      </Button>
      {loading ? (
        <>
          <Container>
            <CircularProgress disableShrink />
          </Container>
        </>
      ) : (
        <>
          <TableHead>
            <TableRow>
              {beerData &&
                beerData.map((headCell) => (
                  <TableCell key={headCell.id} align="left" padding="normal">
                    <TableSortLabel>{headCell.label}</TableSortLabel>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
        </>
      )}
    </div>
  );
};
export default About;
