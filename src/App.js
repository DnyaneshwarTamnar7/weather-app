import './App.css';
import { useState} from "react";
import axios from 'axios';
import WeatherPage from './WeatherPage';

function App() {
    const [data, setData] = useState();
    const [newCity, setNewCity] = useState();
    const apiCall = async (newCity) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${newCity}&APPID=6557810176c36fac5f0db536711a6c52`);
        setData(res.data)
    } catch (e) {
       
    }
  }


  const clearForm = () => {
    setNewCity("")
  }
  const handleClik = (e) => {
    e.preventDefault();
    clearForm();
  }

  const getValidInput = () => {
    if(newCity){ return true;} else { return false;}
  }

  const handleSearch = () => {
    apiCall(newCity);
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
            value={newCity}
            onChange={(e)=> {
              setNewCity(e.target.value);
            }}
          />
          <button className='btn btn-success mt-2 mb-4' onClick={handleSearch} disabled={!getValidInput()}>Search</button>
          </form>
        </div>
      {data ? <WeatherPage data={data}/> : <h2 className='serach-msg'>Please search for city</h2>}
      </>
    )
}

export default App;
