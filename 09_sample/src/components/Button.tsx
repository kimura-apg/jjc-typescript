import React, { Component } from "react";

export default function CustomButton() {
  return (
    <>
      <button onClick={() => console.log("click!!!")}>test</button>
    </>
  );
}

class CustomButton2 extends Component {
  handleClick = () => {
    console.log("click!!!");
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>test</button>
      </>
    );
  }
}
