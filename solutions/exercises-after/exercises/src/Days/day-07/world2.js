import React from "react";
import "./world2.css";

const tenHighestPopulation = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 }
];

const Country = ({ country: { country, population } }) => {
  return (
    <div>
      <h1>{country}</h1>
      <small>{population}</small>
    </div>
  );
};

const TenHighestPopulation = ({ tenHighestPopulation }) => {
  const tenHigjList = tenHighestPopulation.map(country => (
    <Country key={country.country} country={country} />
  ));
  return <div>{tenHigjList}</div>;
};

function World() {
  return (
    <div className="App">
      <TenHighestPopulation tenHighestPopulation={tenHighestPopulation} />
    </div>
  );
}

export default World;
