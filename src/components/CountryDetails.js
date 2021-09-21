import React from 'react';
import {Link} from 'react-router-dom'
import map from './map.svg'


const CountryDetails = (props) => {
    
    const country = props.country;

    const broders =  country.borders.map((border,index) => {
        return <p className="border" key={index+'borrder'}>{border}</p>
    })

    return (
        <div className="country-details">
            <div className="flag">
                <img src={country.flag} />
            </div>  
            <div className="coutry-details-dec"> 
              <div className="details">
                <div>
                    <h2 style={{display:"inline"}}>{country.name}</h2>&nbsp;<Link to={`/location/${country.latlng[0]}/${country.latlng[1]}`} style={{display:"inline-block"}}><img src={map}  style={{width:"20px",display:"inline",color:"#fff"}}/></Link>
                    <p><strong>Native Name:</strong>&nbsp;{country.nativeName}</p>
                    <p><strong>Population:</strong>&nbsp;{country.population}</p>
                    <p><strong>Region:</strong>&nbsp;&nbsp;{country.region}</p>
                    <p><strong>Sub-Region:</strong>&nbsp;{country.subregion}</p>
                </div>
                <div>
                    <p><strong>Currencies:</strong>&nbsp;{country.currencies.map((item) => item.name + `(${item.symbol}),`)}</p>
                    <p><strong>Languages:</strong>&nbsp;
                    {
                        country.languages.map((lang) => (
                            lang.name + ','
                        ))
                    }
                    </p>
                </div>
             </div>
             <div className="borders-section">
                 Borders:&nbsp;{broders.length > 1 ? <div className="borders">broders</div> : 'N/A'}
             </div>
           </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>
    );
}

export default CountryDetails;
