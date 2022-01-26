import React from 'react';
import {Link} from 'react-router-dom'
import map from './map.svg'


const CountryDetails = (props) => {
    
    const country = props.country;
    console.log(country)
    country.borders  = country.borders || []
    country.languages = country.languages || {}
    const borders =  country.borders.map((border,index) => {
        // return <p className="border" key={index+'border'}>{border}</p>
        return border + ', '
    })

    return (
        <div className="country-details">
            <div className="flag">
                <img src={country.flags.png} />
            </div>  
            <div className="coutry-details-dec"> 
              <div className="details">
                <div>
                    <h2 style={{display:"inline"}}>{country.name.common}</h2>&nbsp;<a href={country.maps.googleMaps} style={{display:"inline-block"}} target="_blank"><img src={map}  style={{width:"20px",display:"inline",color:"#fff"}}/></a>
                    <p><strong>Native Name:</strong>&nbsp;{country.nativeName}</p>
                    <p><strong>Population:</strong>&nbsp;{country.population}</p>
                    <p><strong>Region:</strong>&nbsp;&nbsp;{country.region}</p>
                    <p><strong>Sub-Region:</strong>&nbsp;{country.subregion}</p>
                </div>
                <div>
                    <p><strong>Currencies:</strong>&nbsp;{country.currencies ? Object.keys(country.currencies).map((item) => country.currencies[item].name + `(${country.currencies[item].symbol}),`) : 'N/A'}</p>
                    <p><strong>Languages:</strong>&nbsp;
                    {
                        Object.keys(country.languages).map((lang) => (
                            country.languages[lang]  + ','
                        ))
                    }
                    </p>
                </div>
             </div>
             <div className="borders-section">
                 <strong>Borders</strong>: {borders.length > 1 ? <span >{borders}</span> : 'N/A'}
             </div>
           </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>
    );
}

export default CountryDetails;
