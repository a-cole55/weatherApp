import React from "react";
import City from "./components/City";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function App() {
  const [cityData, setCityData] = useState([]);
  // const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    //Major City Zip Codes for Austin, Dallas, and Houston
    const cityZips = [78759, 75201, 77005];

    //Get API Data
    const getWeatherData = async () =>{
      try {
        //Insert each zipcode into API URL; creating an array of the zipcode urls
          const cityZipURL = await cityZips.map((ele) => {
            return(`https://api.openweathermap.org/data/2.5/weather?zip=${ele}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
          });

          //Fetch API data for each city
          const getWeatherData = await Promise.all(cityZipURL.map((url) => axios.get(url)))
            .then(
              axios.spread((...allData) => {
              // console.log({ allData });
              let weatherData = allData.map((data) =>{
                return data.data
              });
              console.log(weatherData);
              setCityData(weatherData)
      })
      );
        } catch (error){
        console.log(error)
      }
    }
      getWeatherData();


}, []);


  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Everything's Bigger in Texas</h1>
        <span id="header2">Major Cities Weather App</span>
      </header>
      <div className="cityInfo">
        {cityData.map((data, index) => {
          return <City 
          key={index}
          city={data.name}
          temp={Math.round(data.main.temp)}
          weatherCondition={data.weather[0].main}
          desc ={data.weather[0].description}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
          visibility={data.visibility}
          />
        }
        )}
      </div>
    </div>
  );
}

export default App;
