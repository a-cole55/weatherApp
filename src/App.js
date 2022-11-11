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
    const cityZips = [78759, 75000, 77005];
    //75201 === Dallas

    //Get API Data
    const getWeatherData = async () =>{
      try {
        //Insert each zipcode into API URL; creating an array of the zipcode urls
          const cityZipURL = await cityZips.map((ele) => {
            return(`https://api.openweathermap.org/data/2.5/weather?zip=${ele}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
          });

          //Fetch API data for each city
          const getWeather= await cityZipURL.map((url) => axios.get(url));
          console.log(getWeather);

          
          Promise.allSettled(getWeather)
            .then((result) => {
              console.log(result)
              setCityData(result);
            }
          )
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
          if(data.status === "fulfilled"){
            return <City 
            key={index}
            city={data.value.data.name}
            temp={Math.round(data.value.data.main.temp)}
            weatherCondition={data.value.data.weather[0].main}
            desc ={data.value.data.weather[0].description}
            pressure={data.value.data.main.pressure}
            humidity={data.value.data.main.humidity}
            visibility={data.value.data.visibility}
            />
          }else{
            return (
              <div className='data'>
                  <h2>Sorry this data is unavailable at this time. Please try again later.</h2>
              </div>
            )
          }
          
        }
        )}
      </div>
    </div>
  );
}

export default App;
