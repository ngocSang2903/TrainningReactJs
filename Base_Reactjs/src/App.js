import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyCoponent from './components/MyComponent';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div>
      hello
      <MyCoponent></MyCoponent>
    </div>
    )
  }
}




// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       hello
//       <MyCoponent></MyCoponent>
//     </div>
//   );
// }

export default App;
