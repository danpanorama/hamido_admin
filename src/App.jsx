import logo from "./logo.svg";
import "./App.css";
import NavRoute from "./nav/NavRoute";
import { useDispatch, useSelector } from "react-redux";
import { checkOrders, getAllOrdersAction, getNoneActiveOrders } from "./Redux/Actions/ordersAction";
import { useEffect } from "react";

function App() {
  const errState = useSelector((state) => state.err);
  const orders = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      getuserOrders();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function getuserOrders() {
    dispatch(getAllOrdersAction())
    dispatch(getNoneActiveOrders());
  }

  return (
    <div className="flexrow">
      <div className="space"></div>
      <div className="paddingPage">
        <NavRoute />
      </div>

      <div className="positionErrormessage">
        {errState.active_message ? (
          <div className={"errMessage " + errState.type}>
            <p className="message">{errState.msg}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
