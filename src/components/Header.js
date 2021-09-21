import React from 'react';

const Header = (props) => {
    
    const {
        darkMode,
        getDarkMode
    } = props

    const handleDark = () => {
        localStorage.setItem('darkMode',true)
        getDarkMode(true)
    }
    const handleBright = () => {
        localStorage.setItem('darkMode',false)
        getDarkMode(false)
    }
    return (
        <div className="header">
            <h2 className="header-title">Where in the world?</h2>
            <div className="mode">
                {/* <p>{darkMode?<span class="fa-solid fa-moon" onClick={handleBright}>light</span> : <span class="fa-solid fa-moon" onClick={handleDark}>Dark</span>}</p> */}
            </div>
        </div>
    );
}

export default Header;
