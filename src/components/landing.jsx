import React from "react";
import { useNavigate } from "react-router-dom";
import './Landing.css'

const Landing = () => {
    const navigate = useNavigate();
    const redirect = () => {
        navigate("/product")
    }
    return(
        <main>
            <h1>The Lit Nook</h1>
            <p>Your cozy corner for discovering and buying books online! Explore a vast collection of bestsellers, timeless classics, and hidden gems, all at your fingertips. Find your next great read and let every page take you on a new adventure!
            </p>
            <button onClick={() => redirect()}>GET STARTED</button>
        </main>
    )
}

export default Landing;