import React, { Component } from "react";

class HighScore extends Component {
  render() {
    if (this.props.overTen) {
      return (
        <div>
          <h3>The count is above ten, Highscore!!</h3>
          <button onClick={this.props.onReset}>Reset</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HighScore;
