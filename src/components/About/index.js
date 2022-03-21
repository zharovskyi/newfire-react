import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useSelector, useDispatch } from "react-redux";
import { requestBeerData } from "./store/action";
import { showData } from "./store/action";

const conteinerStyle = {
  paddingTop: "100px",
};
const About = () => {
  const { beerData, loading } = useSelector((state) => {
    return state;
  });
  // eslint-disable-next-line no-debugger
  // debugger;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(requestBeerData(beerData));

    setTimeout(() => {
      dispatch(showData(beerData));
    }, 1000);
  };

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
              {beerData.map((headCell) => (
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
