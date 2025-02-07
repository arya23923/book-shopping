import React from "react";
import Landing from "./LandingPage";
import Navigation from "./Navigation";
import Product from "./Products";

const Homepage = () => {
    return(
        <>
            <Navigation />
            <Landing />
            <Product />
        </>
    )
}

export default Homepage;