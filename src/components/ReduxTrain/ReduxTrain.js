import Button from "@mui/material/Button";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../ReduxTrain/store/actions";

const ReduxTrain = ({ value }) => {
  const valueFromState = useSelector((state) => {
    return state?.reducer?.startValue;
  }); //mapStateToProps
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-beetwen" }}>
        <Button
          variant="contained"
          startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
          //   onClick={onIncrement}
          onClick={() => dispatch(increment(value))}
          style={{ margin: "10px auto" }}
        >
          Counter Increment
        </Button>
        <h1 style={{ padding: "50px" }}>{valueFromState}</h1>
        <Button
          variant="contained"
          startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
          //   onClick={onDecrement}
          onClick={() => dispatch(decrement(value))}
          style={{ margin: "10px auto" }}
        >
          Counter Increment
        </Button>
      </div>
    </>
  );
};

export default ReduxTrain;
