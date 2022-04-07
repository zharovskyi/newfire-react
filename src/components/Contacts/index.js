import { useDispatch, useSelector } from "react-redux";

function Contacts() {
  const storeBeer = useSelector((store) => store.contactReducer.beerData);
  const dispatch = useDispatch();
  // console.log(storeBeer);
  return (
    <>
      <h2>Contacts redux saga</h2>
      <button onClick={() => dispatch({ type: "LOAD_DATA" })}>
        Click Button
      </button>
      <br />
      {!!storeBeer.length &&
        storeBeer.map((item) => <div key={item?.name}>{item?.name}</div>)}
    </>
  );
}

export default Contacts;
