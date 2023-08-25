import './CSS/WeatherPage.css';
import FirstDay from './FirstDay';
import SecondDay from './SecondDay';
import ThirdDay from './ThirdDay';
import FourthDay from './FourthDay';
import { WiHumidity, WiThermometer, WiCloud, WiStrongWind } from "react-icons/wi";

function WeatherPage(props) {
    const data = props.data;
    const  {city, list}  = data;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[(new Date(list[0].dt_txt)).getDay()];
    return (
        <div className='d-flex flex-column flex-sm-row'>
        <div className="container weather-page">
            <div className='d-flex'>
                <div className='icon'>
                    <img src={"http://openweathermap.org/img/w/" + list[0].weather[0].icon + ".png"} alt=''/>
                </div>
                <div className='details'>
                    <p>{day}</p>
                    <p>{city.name}</p>
                    <p><WiThermometer/> Temperature: {Math.round(list[0].main.temp - 273.15)}°C</p>
                    <p><WiCloud/> {list[0].weather[0].main}<span> {list[0].weather[0].description}</span></p>
                </div>
            </div>
            <div className='d-flex sub-details'>
                <p><WiHumidity />Humidity: {list[0].main.humidity}%</p>
                <p>Pressure: {list[0].main.pressure}mbar</p>
                <p><WiStrongWind/> Wind Speed: {list[0].wind.speed} km/Hr</p>
            </div>
                
       </div>
       <div className='d-flex flex-column weather-page-section'>
        <div className='d-flex'>
        <FirstDay data = {list[8]} />
        <SecondDay data= {list[16]} />
        </div>
        <div className='d-flex '>
        <ThirdDay data= {list[24]} />
        <FourthDay data={list[32]} />
        </div>
        
       </div>
        
        </div>
    )
}

export default WeatherPage;