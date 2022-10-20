

import "./index.css";
// import  Post from "./../post"
import axios from 'axios'
import { useState } from "react";
// import [useState]



function Weather() {

  const[weatherData, setWeatherData] = useState(null);
  const[cityName, setCityName] = useState("");


    const submitHandler = (e) => {
    e.preventDefault();


        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=1145fddd48328e9df67a5f5996184638`)
   .then(response =>{
     console.log("response:", response)
     setWeatherData(response.data)
   })
   .catch(error =>{
     console.log(error)

   })
    }
   return <div>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Your CIty name"
                onChange={(e) => { setCityName(e.target.value)}} /> 
                <button type="submit">get weather</button>
          
            </form>

            {(weatherData === null) ? null :
                <div>
                Temperature: { Math.round(weatherData?.main?.temp) } 'C
                <br/>
                Min: { Math.round(weatherData?.main?.temp_min) } 'C
                <br/>
                Min: { Math.round(weatherData?.main?.temp_min) } 'C
            </div>
            }
    </div>
    

}

 
export default Weather;