import React, { useState, useEffect } from 'react';
import GetCountryForm from './GetCountryForm';
import CountryInfo from './CountryInfo'
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});
  /*
  useEffect(() => {
    async function getCountryInfo(country) {
      // get the lists of items from the memu api and set them as state variable
      let country = await CountryInfo.getCountryInfo();

      setCountry(country);
     
      setIsLoading(false);
    }
    getCountryInfo(country);
  }, []);
  */

  return (
    <div className="App">
      <GetCountryForm />
    </div>
  );
}

export default App;
