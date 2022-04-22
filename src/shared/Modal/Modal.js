import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Modal.module.css";
import { Alert, Button, Snackbar } from "@mui/material";
import IconifyButtonIcon from "../IconifyButtonIcon";
import {
  clearTableReducerAction,
  sendPutData,
  showModalType,
} from "../../components/TablePage/redux/actions";
import ModalItem from "./ModalItem";

const barStyles = {
  display: "flex",
  alignItems: "flex-end",
  marginBottom: 20,
};
const redText = {
  color: "red",
};
const ModalContainer = () => {
  const dispatch = useDispatch();

  const { isModalOpen } = useSelector(({ tableReducer: { isModalOpen } }) => ({
    isModalOpen,
  }));

  const toggleModal = () => {
    dispatch(showModalType());
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("First name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Min length 3 letters"),
    // type: yup
    //   .string()
    //   .required("First name is required")
    //   .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    //   .min(3, "Min length 3 letters")
    //   .max(4, "Max length 4 letters"),
    // tel: yup.string().matches(/^\+?3?8?(0\d{9})$/, "Phone number is not valid"),
    // experience: yup.string().typeError("Value must be a number"),
    // age: yup.string().required("Age is required"),
    // conditions: yup.boolean().oneOf([true], "Conditions is required"),
    // password: yup.string().min(4).max(15).required(),
    // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(
      sendPutData({
        data,
        onSucessCalback: () => {
          reset();
          // toggleModal(false);
        },
      }),
    );
  };

  // useEffect(() => {
  //   dispatch(loadDataAction());
  // }, [success]);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        className={styles.btnAdd}
        startIcon={<IconifyButtonIcon icon="eva:plus-fill" />}
        onClick={toggleModal}
      >
        Add new recipe
      </Button>
      {isModalOpen && (
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
            <TextField
              required
              id="outlined-name"
              label="Name of beer"
              name="name"
              {...register("name")}
            />
            <br />
            <span style={redText}>{errors.name && errors.name.message}</span>
            <TextField
              // required
              id="outlined-type"
              label="Name of beer"
              name="type"
              {...register("type")}
            />
            <TextField
              // required
              id="outlined-alcohol"
              label="Alcohol"
              name="alcohol"
              type="number"
              {...register("alcohol")}
            />
            <TextField
              // required
              id="outlined-bittenesrs"
              label="Bittenesrs"
              name="bittenesrs"
              type="number"
              {...register("bittenesrs")}
            />
            <TextField
              // required
              id="outlined-capacity"
              label="Capacity"
              name="capacity"
              type="number"
              {...register("capacity")}
            />
            <br />
            <Button
              variant="contained"
              className={styles.btn}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </ModalItem>
      )}
    </>
  );
};

export default ModalContainer;
