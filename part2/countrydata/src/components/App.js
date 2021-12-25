import React, { useState, useEffect } from 'react'
import Country from './Country'
import Filter from './Filter'
import axios from 'axios'


const App = () => {

  const [ countries, setCountry ] = useState([ ]) 
  const [ countriestoshow, setCountriestoshow ] = useState([ ])
  const [ toshow, settoshow ] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
      
  }, [])


  const handleCountryFilter = (event) =>{

    setCountriestoshow((event.target.value==='')
    ? []
    : countries.filter(countries => countries.name.common.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
  }

  useEffect(() => {
    if(countriestoshow.length===1)
    {
      settoshow(countriestoshow.map(element => <Country country={element} bigcountry={true}  key={element.name.official} />))
    }
    else
    {
      if(countriestoshow.length>=10)
      {
        settoshow("Too many matches, specify another filter")
      }
      else
      {
        settoshow(countriestoshow.map(element => <Country country={element} bigcountry={false}  key={element.name.official} />))
      }
    }
  }, [countriestoshow]); 
  
  return (
    <div>
      <Filter countryhandler={handleCountryFilter}/>

      {toshow}

      
    </div>
  )
}

export default App