import './App.scss';
import React from 'react';
import Header from './components/Header/Header';

class App extends React.Component{
  render(){
    return(
      <div className="app-container">
        <Header></Header>
    </div>
    )
  }
}


export default App;
