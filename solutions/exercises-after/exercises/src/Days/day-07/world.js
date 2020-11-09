import React, { Component } from "react";
import "./world.css";

// const test = () => {
//   let i = Math.floor(Math.random() * 5);
//   console.log(i);
//   return i;
// };
// test();
class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrys: []
    };
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/e5efaf23-793f-4e41-9b0c-6470dfc20068")
      .then(res => res.json())
      .then(data => {
        this.setState({
          countrys: data
        });
        console.log(data);
      });
  }
  changeCountry = () => {
    this.setState({ countrys: [] });
    const { countrys } = this.state;
    let i = Math.floor(Math.random() * countrys.length);
    console.log(countrys[i]);
    this.setState({ countrys: countrys[i] });
  };

  render() {
    const { countrys } = this.state;
    return (
      <div className="App">
        <div key={countrys.country} className="country">
          <img
            src={countrys.image}
            className="country__img"
            alt={countrys.country}
          ></img>
          <h1>國家：{countrys.country}</h1>
          <h2>首都：{countrys.capital}</h2>
        </div>

        <button className="btn" onClick={this.changeCountry}>
          Selector
        </button>
      </div>
    );
  }
}

export default World;
