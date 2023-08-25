import './CSS/Pages.css';
import {WiThermometer, WiCloud } from "react-icons/wi";
function FourthDay(props) {
    const list = props.data;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[(new Date(list.dt_txt)).getDay()];
    return (
        <div className="weather-page-sub-section">
                
                <div className='d-flex'>
                    <img src={"http://openweathermap.org/img/w/" + list.weather[0].icon + ".png"} alt=""/>
                    <p>{day}</p>
                </div>
                <h5><WiThermometer/>{Math.round(list.main.temp - 273.15)}°C</h5>
                <p><WiCloud/>{list.weather[0].main}<span> {list.weather[0].description}</span></p>
        </div>
    )
}

export default FourthDay;