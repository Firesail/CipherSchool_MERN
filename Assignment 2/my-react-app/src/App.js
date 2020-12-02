// import logo from './logo.svg';
import React, { Component } from 'react';
import Number from './Components/Number';

class App extends Component{

  state = {
    num: 0,
    bgColor: 'white' 
  }

  generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  increment = () => {
    this.setState({
      num: this.state.num + 1,
      bgColor: this.generateRandomColor()
    }
    ) 
    // console.log(this.state.bgColor);
  }

  decrement = () => {
    this.setState({
      num: this.state.num - 1 < 0 ? 0 : this.state.num - 1,
      bgColor: this.generateRandomColor()
    }
    ) 
    // console.log(this.state.num + 1);
  }

  refresh = () => {
    this.setState({
      num: 0,
      bgColor: 'white'
    }
    ) 
    // console.log(this.state.num + 1);
  }

  render(){
    return(
      <div>
        <center>
        <h1>NUMBER CARD GENERATOR</h1>
        <Number num = {this.state.num} bgColor = {this.state.bgColor} 
        increment = {this.increment} decrement = {this.decrement} refresh = {this.refresh}> 
        </Number>
        </center>
    </div>
    )
  }

}

export default App;
