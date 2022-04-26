import { useDispatch, useSelector } from "react-redux";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./Modal.module.scss";
import { Button } from "@mui/material";
import {
  changeInputDataType,
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
  const formData = useSelector((state) => state.tableReducer.formData);
  const isEditModalType = useSelector(
    (state) => state.tableReducer.isEditModalType,
  );
  const headlineText = "Please, add the necessary information";

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("First name is required")
      .matches(/^[aA-zZ '-\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Min length 3 letters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSucessCleanFormCalback = () => {
    reset();
  };

  const toggleModal = () => {
    dispatch(showModalType());
  };

  const handleChange = (e) => {
    dispatch(
      changeInputDataType({ ...formData, [e.target.name]: e.target.value }),
    );
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (isEditModalType) {
      return dispatch(
        sendPutEditorData({ formData, onSucessCleanFormCalback }),
      );
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

          <TextField
            required
            id="outlined-name"
            label="Name of beer"
            name="name"
            value={isEditModalType ? formData?.name : null}
            {...register("name")}
            onChange={handleChange}
          />
          <br />
          <span style={redText}>{errors.name && errors.name.message}</span>
          <TextField
            // required
            id="outlined-type"
            label="Type of beer"
            name="type"
            value={isEditModalType ? formData?.type : null}
            {...register("type")}
            onChange={handleChange}
          />
          <TextField
            // required
            id="outlined-alcohol"
            label="Alcohol"
            name="alcohol"
            type="number"
            value={isEditModalType ? formData?.alcohol : null}
            {...register("alcohol")}
            onChange={handleChange}
          />
          <TextField
            // required
            id="outlined-bittenesrs"
            label="Bittenesrs"
            name="bittenesrs"
            type="number"
            value={isEditModalType ? formData?.bittenesrs : null}
            {...register("bittenesrs")}
            onChange={handleChange}
          />
          <TextField
            // required
            id="outlined-capacity"
            label="Capacity"
            name="capacity"
            type="number"
            value={isEditModalType ? formData?.capacity : null}
            {...register("capacity")}
            onChange={handleChange}
          />
          <br />
          <Button variant="contained" className={styles.btn} type="submit">
            Submit
          </Button>
        </Box>
      </ModalItem>
    </>
  );
};

export default ModalContainer;
