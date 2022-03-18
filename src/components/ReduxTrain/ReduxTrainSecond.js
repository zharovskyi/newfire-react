import Button from "@mui/material/Button";
import IconifyButtonIcon from "../../shared/IconifyButtonIcon";
import { useSelector, useDispatch } from "react-redux";
import { increment2, decrement2 } from "../ReduxTrain/store/actions";

const ReduxTrainSecond = ({ value }) => {
  const valueFromState2 = useSelector((state) => {
    return state?.reducer2?.startValue2;
  }); //mapStateToProps
  // console.log("render");
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-beetwen" }}>
        <Button
          variant="contained"
          startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
          onClick={() => dispatch(increment2(value))}
          style={{ margin: "10px auto" }}
        >
          Counter Increment 2
        </Button>
        <h1 style={{ padding: "50px" }}>{valueFromState2}</h1>
        <Button
          variant="contained"
          startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
          onClick={() => dispatch(decrement2(value))}
          style={{ margin: "10px auto" }}
        >
          Counter Increment 2
        </Button>
      </div>
    </>
  );
};

export default ReduxTrainSecond;
