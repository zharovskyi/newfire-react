import Table from "../../shared/Table/Table";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import Modal from "../../shared/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterItems from "./FilterItems";

const TablePage = () => {
  const isModalOpen = useSelector((state) => state.tableReducer.isModalOpen);
  const headlineText = "Please, add the necessary information";

  return (
    <>
      <div className={styles.app}>
        <FilterItems />
        {isModalOpen && <Modal headlineText={headlineText} />}
        <Table />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default TablePage;
