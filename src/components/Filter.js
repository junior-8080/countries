import React, { useState } from 'react';

const Filter = (props) => {

     const {
        handleFilter,
        total,
        region
     } = props
    
    const handleChange = (event) => {
        handleFilter(event.target.value)
    }
    const handleSearch =  (event) => {
         handleFilter(`name/${event.target.value}`)
    }
    
    return (
        <div className="filter-search">
            <div className="search">   
                <button><i class="fa fa-search"></i></button>
                <input  placeholder="Country Name..." type="search" className="search" onChange = {handleSearch} />
                {total > 0 ? <p className="total">Total:&nbsp;{total}</p> : ''}
            </div>
            <div className="filter">
            <select  placeholder="Filter By Region"  onChange={handleChange}>
                <option value="all">All</option>
                <option value="region/Africa">Africa</option>
                <option value="region/Americas">Americas</option>
                <option value="region/Europe">Europe</option>
                <option value="region/Oceania">Oceania</option>
            </select>
            </div>
        </div>
    );
}

export default Filter;
