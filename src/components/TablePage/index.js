import Header from "../../shared/Header/Header";
import Table from "./Table";

function TablePage() {
  return (
    <>
      <Header />
      <div
        className="App"
        style={{
          height: 300,
          // minWidth: 320,
          maxWidth: "70%",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <Table />
      </div>
    </>
  );
}

export default TablePage;
