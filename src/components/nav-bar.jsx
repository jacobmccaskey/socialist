import React from 'react'
import { Link} from 'react-router-dom';

const NavBar = () => (
    <div className= "navBar">
        <ul>
            <li>
                <Link to= "/public-page">Social Circle</Link>
            </li>
            <li>
                <Link to= "/">Profile</Link>
            </li>
            <li className="title-pin">socialist</li>
        </ul>
    </div>
);

export default NavBar; 
