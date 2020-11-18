import React from "react";
import ReactDOM from "react-dom";
import "./cards.css";

class Test extends React.Component {
  render() {
    return (
      <div>
        <div className="row box1">
          <div class="col-md-4 ">
            <div class="profile">
              <img className="imagecl" src={this.props.el.element.imageURL} />
              <span className="info">
                <div className="row">
                  <div className="col-md-10 ">
                    <b>Name of the Conference :</b>{" "}
                    {this.props.el.element.confName}
                  </div>

                  <div className="col-md-2 "></div>
                </div>
                <div className="row">
                  <div className="col-md-10 ">
                    {" "}
                    <b>Place:</b> {this.props.el.element.venue}
                  </div>
                  <div className="col-md-2 text-center"></div>
                </div>

                <div className="row  ">
                  <div className="col-6 text-center ">
                    <b> Date:</b> {this.props.el.element.confEndDate}
                  </div>
                  <div className="col-6 text-center">
                    <b>Type:</b> {this.props.el.element.entryType}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 text-center cc"></div>
                  <div className="col-md-8 text-center">
                    <a href={this.props.el.element.confRegUrl}>Click here</a> to
                    Visit the Website
                    <br />
                  </div>
                  <div className="col-md-2 text-center"></div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
