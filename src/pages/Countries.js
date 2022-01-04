import React,{useEffect,useState} from 'react';
// import { getCountries } from '../api/getRequests';
import CountryPreviewCard from '../components/CountryPreviewCard';
import Filter from '../components/Filter';
import Header from "../components/Header"

const Countries = () => {   
    const [countries,setCountries] = useState([]);
    const [region,setRegion] = useState('all')
    const [total,setTotal] = useState(0);
    const [loading,setLoading] = useState(false)
   

    const handleFilter = (value) => {
        if(value === ''){
            console.log(value)
            setRegion('all')
        }else {
            setRegion(value)
        }
      
    }
      
    useEffect(() => {
        setLoading(true)
        fetch(`https://restcountries.com/v3.1/${region}`)
        .then(res  => res.json())
        .then(result => {
            setLoading(false)
            if(result.status === 404){
                setCountries([])
                setTotal(0)
            }else {
                setCountries(result)
                setTotal(result.length)
            }

        }).catch(err => {
        })

    }, [region]);


    const data = countries.map((item) => {
        const details = {
            flag:item.flags.png,
            name:item.name.common,
            population:item.population,
            region:item.region,
            capitalCity:item.capital ? item.capital : 'N/A',
            flagIcon: item.flag
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
                 !loading && countries.length < 1 ?<h2 className="loading">Not Found</h2>: ''
              }
              {
                  loading ? <h2 className="loading">loading...</h2>: data
              }
 
              </div>
        </div>
    )
}

export default Countries;
