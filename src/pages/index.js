import { data } from "autoprefixer";
import Countries from "components/Countries"
import Search from "components/Search"
import Footer from "components/Footer";
import React, { useEffect, useState } from "react";


export default function Home() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState("Filter by Region")
  const [isActive, setIsActive] = useState(false)
  const [countryData, setCountryData] = useState([])
  const debounceValue = useDebounceValue(query)
  const options = ["Africa", "Asia", "Americas", "Europe", "Oceania"]
  
  function useDebounceValue(value, time =  250) {
    const [debounceValue, setDebounceValue] = useState()
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        setDebounceValue(value)
      }, time)

      return () => {
        clearTimeout(timeout)
      }
    }, [value, time])

    return debounceValue
  }


  async function getCountryDataQueryRequest() {
    const response =  await fetch(`https://restcountries.com/v3.1/name/${debounceValue}`)
    const responseJson = await response.json()

    if(responseJson.length) {
        setCountryData(responseJson)
    }
    else {
      getCountryDataRequest()
    }

  }

  async function getCountryDataRequest() {
    const response =  await fetch(`${selected === "Filter by Region" ? `https://restcountries.com/v3.1/all` : `https://restcountries.com/v3.1/region/${selected}`}`)
    const responseJson = await response.json()

    setCountryData(responseJson)

  }
  
  useEffect(() => {
    getCountryDataQueryRequest(debounceValue)
  },[debounceValue])

  useEffect(() => {
    getCountryDataRequest()
  },[selected])
  
  
  return (
    <div>
      <Search 
        selected={selected} setSelected={setSelected} 
        isActive={isActive} setIsActive={setIsActive} 
        options={options}
        query={query} setQuery={setQuery}
      />
      <Countries countryData={countryData} />
      <Footer />
    </div>
      
  )
}
