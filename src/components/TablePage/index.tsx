import React from "react";
import Table from "../../shared/Table/Table";
import styles from "./index.module.scss";
import {  useSelector } from "react-redux";
import ModalContainer from "../../shared/Modal/ModalContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterItems from "./FilterItems";
import {isModalOpens} from "./selectors";

const TablePage = () => {
  const isModalOpen:boolean = useSelector(isModalOpens);

  return (
    <>
      <div 
      className={styles.app}
      >
        <FilterItems />
        {isModalOpen && <ModalContainer />}
        <Table />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default TablePage;
