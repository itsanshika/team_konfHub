import React from "react";
import ReactDOM from "react-dom";
import Test from "./Components/cards";
// class Test extends React.Component{

//   render(){
//     return (
//     <div>
//      <img src = {this.props.el.element.imageURL} />
//         {this.props.el.element.city}

//       <br/>
//       </div>)
//   }
// }

var i = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item2: []
    };
    // card:Test}
  }

  items2 = ["ok"];
  componentDidMount() {
    fetch(
      "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ items: json.paid, item2: json.free });
        //this.state.items.forEach(el=>console.log(el))
      });
  }
  render() {
    var arr = this.state.items.map((el) => {
      return (
        // console.log(el.city) ,
        <Test el={{ element: el }} />
      );
    });
    var arr2 = this.state.item2.map((el) => {
      return <Test el={{ element: el }} />;
    });
    return (
      <div>
        {arr}
        {arr2}
      </div>
    );
  }
}
class App2 extends React.Component {
  state = {
    search: ""
  };
  onchange = (e) => {
    this.setState({ search: e.target.value });
  };
  dynamicSearch = () => {
    return this.state.names.filter((name) =>
      name.toLowerCase().includes(this.state.search.toeLowerCase())
    );
  };
}

ReactDOM.render(
  <div>
    {/* <input label="Search for confrence"  icon="search" onChange={this.onchange}/>  */}
    <App />
  </div>,
  document.getElementById("root")
);
