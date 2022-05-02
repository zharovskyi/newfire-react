import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Modal.module.scss";
import { Button } from "@mui/material";
import {
  sendPutData,
  sendPutEditorData,
  showModalType,
} from "../../components/TablePage/redux/actions";
import ModalItem from "./ModalItem";

const redText = {
  color: "red",
};
const ModalContainer = () => {
  const dispatch = useDispatch();
  const { formData, isEditModalType } = useSelector(
    ({ tableReducer: { formData, isEditModalType } }) => ({
      formData,
      isEditModalType,
    }),
    shallowEqual,
  );
  const headlineText = "Please, add the necessary information";

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("First name is required")
      .matches(/^[aA-zZ '-\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Min length 3 letters"),
    alcohol: yup.number().min(0.1),
    bittenesrs: yup.number().min(0.1),
    capacity: yup.number().min(0.1),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formData,
    reValidateMode: "onChange",
  });
  const onSucessCleanFormCalback = () => {
    console.log("dddd");
    reset();
  };

  const toggleModal = () => {
    dispatch(showModalType());
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (isEditModalType) {
      return dispatch(sendPutEditorData({ data, onSucessCleanFormCalback }));
    }
    return dispatch(sendPutData({ data, onSucessCleanFormCalback }));
  };

  return (
    <>
      <ModalItem onClose={toggleModal}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
          }}
          onSubmit={handleSubmit(onSubmit)}
          className={styles.content}
          id="FormId"
        >
          {headlineText && <h2 style={{ margin: "8px" }}>{headlineText}</h2>}

          <>
            <TextField
              required
              id="outlined-name"
              label="Name of beer"
              name="name"
              {...register("name")}
            />

            <TextField
              id="outlined-type"
              label="Type of beer"
              name="type"
              {...register("type")}
            />
            <TextField
              id="outlined-alcohol"
              label="Alcohol"
              name="alcohol"
              {...register("alcohol")}
            />
            <br />
            <span style={redText}>
              {errors.alcohol && "Should be a number"}
            </span>
            <TextField
              id="outlined-bittenesrs"
              label="Bittenesrs"
              name="bittenesrs"
              {...register("bittenesrs")}
            />
            <br />
            <span style={redText}>
              {errors.bittenesrs && "Should be a number"}
            </span>
            <TextField
              id="outlined-capacity"
              label="Capacity"
              name="capacity"
              {...register("capacity")}
            />
            <br />
            <span style={redText}>
              {errors.capacity && "Should be a number"}
            </span>
            <br />
            <Button variant="contained" className={styles.btn} type="submit">
              Submit
            </Button>
            <Button
              variant="outlined"
              className={styles.btn}
              onClick={() => {
                reset({
                  name: "",
                  type: "",
                  alcohol: 0,
                  bittenesrs: 0,
                  capacity: 0,
                });
              }}
            >
              Reset
            </Button>
          </>
        </Box>
      </ModalItem>
    </>
  );
};

export default ModalContainer;
