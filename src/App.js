import City from "./components/City";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function App() {
  const [cityData, setCityData] = useState([])

  useEffect(() => {
    //Major City Zip Codes for Austin, Houston, and Dallas
    const cityZips = [78759, 77005, 75201];

    //Get API Data
    const getWeatherData = async () =>{
      try {
        //Insert each zipcode into API URL; creating an array of the zipcode urls
          const cityZipURL = await cityZips.map((ele) => {
            return(`https://api.openweathermap.org/data/2.5/weather?zip=${ele}&appid=0d923a011b9d8bfcfb3fd85c0c2dfb8d&units=imperial`)
          });

          //Fetch API data for each city
          const getWeatherData = await Promise.all(cityZipURL.map((url) => axios.get(url)))
            .then(
              axios.spread((...allData) => {
              console.log({ allData });
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
        <h1>Texas Major Cities Weather App</h1>
      </header>
      <div className="cityInfo">
        {cityData.map((data, index) => {
          return <City 
          key={index}
          city={data.name}
          temp={data.main.temp}
          weatherCondition ={data.weather[0].description}
          />
        }
        )}
      </div>
    </div>
  );
}

export default App;
