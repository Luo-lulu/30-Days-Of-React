import React, { useState, useEffect, useRef } from "react";
import useFetch from "./useFetch";
import "./day25.css";
import Loading from "./Loading";

const Day25 = props => {
  const url = "https://restcountries.eu/rest/v2/all";

  const { isLoading, data } = useFetch(url);

  const [input, setInput] = useState("");
  const handleInputChange = e => {
    setInput(e.target.value);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const Country = ({ country: { name, flag, population, languages } }) => {
    return (
      <div className="country">
        <div className="country_flag">
          <img className="country_img" src={flag} alt={name} />
        </div>
        <h3 className="country_name">{name.toUpperCase()}</h3>
        <div className="country_text">
          <span>Population: </span>
          {population}
          <br />
          <span>Languages: </span>
          <div>
            {languages.map((lan, index) => (
              <span key={index}>{lan.name}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Input = () => {
    return (
      <input
        className="search__input"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search Countries By Name"
        ref={inputRef}
      />
    );
  };

  if (isLoading) return <Loading />;

  //input 有內容就return這裡的東西
  if (input) {
    //如果input有內容 就把data裡符合input的物件放進newArr
    const newArr = data.filter(val => val.name.match(input));

    return (
      <form className="App">
        <h1>WORLD COUNTRIES DATA</h1>
        <h3>Currently, we have {data.length} countries</h3>
        <div>
          <p>There are {data.length} countries in the api</p>
          <Input />
          <div className="countries-wrapper">
            {newArr.map((country, index) => (
              <Country key={index} country={country} />
            ))}
          </div>
        </div>
      </form>
    );
  }
  //input沒有內容就會return這裡
  return (
    <form className="App">
      <h1>WORLD COUNTRIES DATA</h1>
      <h3>Currently, we have {data.length} countries</h3>
      <div>
        <p>There are {data.length} countries in the api</p>
        <Input />
        <div className="countries-wrapper">
          {data.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Day25;
