import React from "react";
import './Landing.css'

const Landing = () => {
    return(
        <main>
            <div className="left">
                <h1>The Lit Nook</h1>
                <p>A cozy corner for literature enthusiasts.</p>
                <button>Get started</button>
            </div>
            <div className="right">
                <p>The Lit Nook is an online bookstore designed for passionate readers who crave captivating stories and literary gems.
                    Whether you're a fan of timeless classics, thrilling mysteries, or the latest bestsellers, our curated collection ensures there's something for everyone. 
                    At The Lit Nook, we believe that every book is a doorway to a new adventure, a fresh perspective, or a deep emotional journey.
                    Our user-friendly platform makes it easy to browse, discover, and purchase books from the comfort of your home.
                    With personalized recommendations, exclusive discounts, and a vibrant community of book lovers, we aim to create more than just a bookstore—we're building a literary haven. 
                    Dive into our ever-growing library and let your next great read find you.
                    Because at The Lit Nook, every story deserves to be told, and every reader deserves the perfect book.</p>
            </div>
        </main>
    )
}

export default Landing;