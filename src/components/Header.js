import React from 'react'
import './Header.css';


function Header() {
    return (
        <div>
            <nav>
                <div className="header_name">
                    <h1>React Meals</h1>
                </div>
                
                <div className="nav_links">
                    <a href="">Order</a>
                    <a href="">Home</a>
                    <a href="">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}

export default Header
