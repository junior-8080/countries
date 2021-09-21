import React from 'react';
import {Link} from 'react-router-dom'

const CountryPreviewCard = (props) => {

    const {
        flag,
        name,
        population,
        region,
        capitalCity
    } = props.details;

    return (
        <Link  className="preview-card" to={`/countries/name/${name}`}>
            <div className="preview-card-banner">
                <img src={flag} />
            </div>
            <div>
                <p className="country-name">{name}</p>
                <div className="preview-details">
                    <p><strong>Population:</strong>&nbsp;<span>{population}</span></p>
                    <p><strong>Region:</strong>&nbsp;<span>{region}</span></p>
                    <p><strong>Capital:</strong>&nbsp;<span>{capitalCity}</span></p>

                </div>
            </div>
        </Link>
    );
}

export default CountryPreviewCard;
