import React, { useState } from "react";
import CountryInfo from './CountryInfo';
import DisplayCountry from './DisplayCountry';
import { useNavigate } from "react-router-dom";

const GetCountryForm = () => {

  const navigate = useNavigate();

  function getCountryInfo(country) {

        // get the lists of items from the memu api and set them as state variable
    let countryData = CountryInfo.getCountryInfo();

    //setCountry(country);
   
    //setIsLoading(false);
    return countryData;
  }
    
    const [country, setCountry] = useState("United States");
    const handleChange = (e) => {
    setCountry(e.target.value);
    }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    alert(`Country Name, ${country}`);
    let countryData = getCountryInfo(country);
    /*return (
      <div className="DisplayCountry">
        <DisplayCountry />
      </div>
      )
      */
    //setCountry("");
    navigate('/Display', {countryData});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        name="country"
        placeholder="Country"
        value={country}
        onChange={handleChange}
      />

     
      <button>Get Country</button>
    </form>
  )
}

export default GetCountryForm;