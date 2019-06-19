import React from 'react';
import './App.css';
import { Button } from './button';
import { Input } from './input';
import { ClearButton } from './clearbutton';
import * as math from 'mathjs';

class App extends React.Component {
  state = {
      input: ""
    }
  

  add = val => {
    this.setState({input: this.state.input + val});
  }

  equal = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  multiply = val => {
    if (val === "x") {
      this.setState({input: this.state.input + val.replace("x", "*")});
    }
}

  render() {
    return (
      <div className="app">
        <div className="calculator-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.add}>7</Button>
            <Button handleClick={this.add}>8</Button>
            <Button handleClick={this.add}>9</Button>
            <Button handleClick={this.multiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.add}>4</Button>
            <Button handleClick={this.add}>5</Button>
            <Button handleClick={this.add}>6</Button>
            <Button handleClick={this.add}>-</Button>
          </div>
          <div className="row">
            <Button className='ops' handleClick={this.add}>1</Button>
            <Button className='ops' handleClick={this.add}>2</Button>
            <Button className='ops' handleClick={this.add}>3</Button>
            <Button className='ops' handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.add}>0</Button>
            <Button handleClick={this.add}>.</Button>
            <Button handleClick={() => this.equal()}>=</Button>
            <Button handleClick={this.add}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({input: ""})}>clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
