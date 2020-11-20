import React, { Component } from "react";

// const Country = ({
//   country: { name, capital, flag, languages, population, currency }
// }) => {
//   const formatedCapital =
//     capital.length > 0 ? (
//       <>
//         <span>Capital: </span>
//         {capital}
//       </>
//     ) : (
//       ""
//     );
//   const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
//   console.log(languages);
//   return (
//     <div className="country">
//       <div className="country_flag">
//         <img src={flag} alt={name} />
//       </div>
//       <h3 className="country_name">{name.toUpperCase()}</h3>
//       <div class="country_text">
//         <p>{formatedCapital}</p>
//         <p>
//           <span>{formatLanguage}: </span>
//           {languages.map(language => language.name).join(", ")}
//         </p>
//         <p>
//           <span>Population: </span>
//           {population.toLocaleString()}
//         </p>
//         <p>
//           <span>Currency: </span>
//           {currency}
//         </p>
//       </div>
//     </div>
//   );
// };

class Test extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://api.thecatapi.com/v1/breeds";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        {/* <div>
          <p>There are {this.state.data.length} countries in the api</p>
          <div className="countries-wrapper">
            {this.state.data.map(country => (
              <Country country={country} />
            ))}
          </div>
        </div> */}
      </div>
    );
  }
}
export default Test;
