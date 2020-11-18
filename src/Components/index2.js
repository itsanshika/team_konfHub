import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
  render() {
    return (
      <div>
        {this.props.el.element.imageURL}
        {this.props.el.element.city}

        <br />
      </div>
    );
  }
}
