import React, { Component } from "react";
import HighScore from "./HighScore";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overTen: false,
    };
  }

  handleClick = () => {
    console.log("clicked");
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(props, state) {
    // console.log(this.state);
    // console.log(state);

    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      console.log("updated");
      this.setState({
        overTen: true,
      });
    }
  }

  resetCount = () => {
    this.setState({
      count: 0,
      overTen: false,
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>You have clicked {count} times</h1>
        <button onClick={this.handleClick}>CLick me!</button>
        <HighScore overTen={this.state.overTen} onReset={this.resetCount} />
      </div>
    );
  }
}

export default Application;
