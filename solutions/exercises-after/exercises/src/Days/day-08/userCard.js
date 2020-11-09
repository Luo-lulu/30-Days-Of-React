import React, { Component } from "react";
//import "./userCard.css";
import mypicture from "./images/mypictrue.jpg";
const Nav = ({ page, onClick }) => (
  <nav className="nav">
    <h1>LULU</h1>
    <h3>About</h3>
    <h3>Portfolio</h3>
  </nav>
);

const Style = () => <button className="change__style ">Style</button>;

const Mypicture = () => (
  <div>
    <img className="mypicture" src={mypicture} alt="Mypicture" />;
    <h2 className="myname">LUO YARU</h2>
    <h5 className="myintroduction">超新手工程師</h5>
    <h3 className="skills">SKILLS :</h3>
    <div className="myskill">
      <div className="myskills">HTML</div>
      <div className="myskills">CSS</div>
      <div className="myskills">javaScript</div>
      <div className="myskills">React</div>
    </div>
  </div>
);

class App extends Component {
  state = {
    styles: {
      backgroundColor: "white",
      color: "black"
    }
  };

  changeStyle = () => {
    let blackStyle = {
      styles: {
        backgroundColor: "black",
        color: "gray"
      }
    };
    let whiteStyle = {
      styles: {
        backgroundColor: "white",
        color: "black"
      }
    };
    let styles =
      this.state.styles === whiteStyle.styles
        ? blackStyle.styles
        : whiteStyle.styles;
    this.setState({ styles });
  };

  render() {
    console.log(this.state.styles);
    return (
      <div className="App" style={this.state.styles}>
        <Nav />
        <Style onClick={this.changeStyle} />
        <Mypicture />
      </div>
    );
  }
}

export default App;
