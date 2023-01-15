import logo from './logo.svg';
import './App.css';
import NavRoute from './nav/NavRoute';
import {useDispatch,useSelector} from "react-redux";

function App() {
       const errState = useSelector((state) => state.err);

  return (
    <div className="App">
      <div className="nav">
        <NavRoute/>
      </div>

      {errState.active_message?
      <div className="errMessage">
        <p className="message">{errState.msg}</p>
      </div>
      :''}
    </div>
  );
}

export default App;
 