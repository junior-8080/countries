import React,{useEffect,useState} from 'react';
// import { getCountries } from '../api/getRequests';
import CountryPreviewCard from '../components/CountryPreviewCard';
import Filter from '../components/Filter';
import Header from "../components/Header"

const Countries = () => {   
    const [countries,setCounntries] = useState([]);
    const [region,setRegion] = useState('all')
    const [total,setTotal] = useState(0);
   

    const handleFilter = (value) => {
        if(value === ''){
            setRegion('all')
        }else {
            setRegion(value)
        }
      
    }
      
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/${region}`).then(res  => res.json())
        .then(result => {
            setCounntries(result)
            setTotal(result.length)
        }).catch(err => {
            if(err.status === 404){
                alert('result not found')
            }
        })

    }, [region]);


    const data = countries.map((item) => {
        const details = {
            flag:item.flag,
            name:item.name,
            population:item.population,
            region:item.region,
            capitalCity:item.capital
        }
        return <CountryPreviewCard  details={details} />
    })

    return (
        <div className="main">
             <div className = "header-filter">
                <Header />
                <Filter handleFilter = {handleFilter} total={total} region={region}/>
             </div>
              <div className="country-cards">
              {
                !countries || countries.length === 0 ?<h2 className="loading">Loading....</h2>: data
              }
              </div>
        </div>
    )
}

export default Countries;
