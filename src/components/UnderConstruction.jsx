import React from "react";
import construction from './images/work-in-progress.png'
import Navigation from "./Navigation";
import './UnderConstruction.css'
import { Link } from "react-router-dom";

const UnderConstruction = () => {
    return(
        <div className="construction">
            <img src={construction} />
            <h3>Sorry! Page under construction</h3>
            <Link to = '/'><button>Navigate to home page</button></Link>
        </div>
    )
}

export default UnderConstruction