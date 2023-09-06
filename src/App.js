import './App.css';
import { useState, useRef} from "react";
import axios from 'axios';
import WeatherPage from './WeatherPage';

function App() {
    const [data, setData] = useState();
    const newCity = useRef();
    const apiCall = async (newCity) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&APPID=6557810176c36fac5f0db536711a6c52`);
        setData(res.data)
    } catch (e) {
       
    }
  }


  const handleClik = (e) => {
    e.preventDefault();
  }

  const getValidInput = () => {
    if(newCity){ return true;} else { return false;}
  }

  const handleSearch = () => {
    apiCall(newCity.current.value);
  }
    return (
      <>
      <div className='App'>
          <h1 className='mt-2 mb-4'>Wather App</h1>
          <form onSubmit={handleClik}>
            <input
            className="form-control border border-light rounded-pill mt-1 mb-2"
            aria-label="Username" 
            aria-describedby="addon-wrapping"
            type="text"
            placeholder="city name"
            ref={newCity}
          />
          <button className='btn btn-success mt-2 mb-4' onClick={handleSearch} disabled={!getValidInput()}>Search</button>
          </form>
        </div>
      {data ? <WeatherPage data={data}/> : <h2 className='serach-msg'>Please search for city</h2>}
      </>
    )
}

export default App;
