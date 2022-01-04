import React from 'react';
import {Link}  from "react-router-dom"

const BackButton = () => {
    return (
        <Link to="/" className="link-home">
             <button className="back-buttton"  ><i class="fa fa-angle-double-left"></i>&nbsp;Home</button>

        </Link>
    );
}

export default BackButton;

