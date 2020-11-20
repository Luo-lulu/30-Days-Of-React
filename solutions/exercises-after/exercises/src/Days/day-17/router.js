import React, { Component } from "react";
import Todolist from "../day-19/components/TodoList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import "./router.css";
import mypicture from "./images/mypictrue.jpg";

const MySkillList = ({ myskills }) => {
  const myskillList = myskills.map(myskill => (
    <div className="myskills" key={myskill}>
      {myskill}
    </div>
  ));
  return myskillList;
};

const MyInformation = ({
  data: {
    author: { firstName, lastName },
    introduction,
    skills
  },
  myskills
}) => (
  <div>
    <img className="mypicture" src={mypicture} alt="Mypicture" />;
    <h2 className="myname">
      {firstName} {lastName}
    </h2>
    <h5 className="myintroduction">{introduction}</h5>
    <h3 className="skills">{skills}</h3>
    <div className="myskill">
      <MySkillList myskills={myskills} />
    </div>
  </div>
);

//About Component
const About = props => <h1 className="about__me">About Me...</h1>;
//Portfoloio Component
const Portfolio = props => (
  <div className="my__portfolio">
    <Todolist />
  </div>
);

// LULU Component
const UserCard = () => {
  const data = {
    author: {
      firstName: "YARU",
      lastName: "LUO"
    },
    introduction: "超新手工程師 ",
    skills: "SKILLS :"
  };
  const myskills = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div className="App">
      <MyInformation data={data} myskills={myskills} />
    </div>
  );
};
const Navbar = () => (
  <nav className="nav">
    <h1>
      <NavLink to="/">LULU</NavLink>
    </h1>
    <h3>
      <NavLink to="/about">About</NavLink>
    </h3>
    <h3>
      <NavLink to="/portfolio">Portfolio</NavLink>
    </h3>
  </nav>
);

class Level2 extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={UserCard} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Level2;
