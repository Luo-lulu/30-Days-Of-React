import React from "react";
import "./App.css";
import mypicture from "./images/mypictrue.jpg";
const Nav = () => (
  <nav className="nav">
    <h1>LULU</h1>
    <h3>About</h3>
    <h3>Portfolio</h3>
  </nav>
);

const MySkillList = ({ myskills }) => {
  const myskillList = myskills.map(myskill => (
    <div className="myskills" key={myskill}>
      {myskill}
    </div>
  ));
  return myskillList;
};

const Mypicture = ({
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
const App = () => {
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
      <Nav />
      <Mypicture data={data} myskills={myskills} />
    </div>
  );
};

export default App;
