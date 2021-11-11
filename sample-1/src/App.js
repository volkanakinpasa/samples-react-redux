import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, signin, signout } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedin = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(signin())}>signin</button>
      <button onClick={() => dispatch(signout())}>signout</button>
      <h1>Counter {counter}</h1>

      <div>is loggedin : {isLoggedin.toString()}</div>
    </div>
  );
}

export default App;
