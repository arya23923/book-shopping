import React, { useRef} from "react";
import './Landing.css'

const Landing = () => {
    const productRef = useRef();
    const redirect = () => {
        window.scroll({
            top: 600,
            left: 0,
            behavior: 'smooth',
          });
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