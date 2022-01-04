import React,{useState,useEffect} from 'react';
import CountryDetails  from "../components/CountryDetails";
import Header  from '../components/Header';
import BackButton from '../components/BackButton';


const Country = (props) => {
  
    const [country,setCountry] = useState(null)
    const name = props.match.params.countryName

    

    useEffect(() => {
       fetch((`https://restcountries.com/v3.1/name/${name}`)).then(res => res.json())
       .then(result => {
           setCountry(result[0])

       })
    }, [name]);

    return (
        <div>
            <Header />
            <BackButton />
           {country ? <CountryDetails country={country}/>:<div className="country-cards" ><h2 className="loading">Loading.....</h2></div>} 
        </div>
    );
}

export default Country;
