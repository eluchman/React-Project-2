import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  //constructor() {
  //super();
  //this.handleIncrement = this.handleIncrement.bind(this);
  //}

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  // renders button onClick event, methods, counter method,

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          //onClick={() => this.handleIncrement(product) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //helper method...giving color to badge/counter

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }


   //helper method...created counter
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
