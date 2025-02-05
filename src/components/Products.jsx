import React from "react";

// classics
import ataleoftwocities from './images/books/ataleoftwocities.jpg'
import dreamofredchamber from './images/books/dreamofredchamber.jpg'
import thecatcherintherye from './images/books/thecatcherintherye.jpg'
import thehandmaidstale from './images/books/thehandmaidstale.jpg'
import nineteen from './images/books/1984.jpg'
import janeeyre from './images/books/janeeyre.jpg'

// crimes
import andthentherewerenone from './images/books/andthentherewerenone.jpg'
import thegodfather from './images/books/thegodfather.jpg'
import gonegirl from './images/books/gonegirl.jpg'
import dragontatoo from './images/books/dragontatoo.jpg'
import angels from './images/books/angels.jpg'
import lovelybones from './images/books/lovelybones.jpg'

const Product = () => {
    const booksArray = [
        {
            category: "Classics",
            books:[
                {
                    name: "A Tale of Two Cities",
                    author: "Charles Dickens",
                    image: {ataleoftwocities},
                    cost: "$15"
                },
                {
                    name:"Dream of the Red Chamber",
                    author: "Cao Xueqin",
                    image: {dreamofredchamber},
                    cost: "$20"
                },
                {
                    name:"The Catcher in the Rye",
                    author: "JD Salinger",
                    image: {thecatcherintherye},
                    cost: "$20"
                },
                {
                    name:"The Handmaid's Tale",
                    author: "Margaret Atwood",
                    image: {thehandmaidstale},
                    cost: "$17"
                },
                {
                    name:"1984",
                    author: "George Orwell",
                    image: {nineteen},
                    cost: "$20"
                },
                {
                    name:"Jane Eyre",
                    author: "Charlotte Brontë",
                    image: {janeeyre},
                    cost: "$15"
                },
            ]
        },
        {
            category:'Crime',
            books: [
                {
                    name:"And Then There Were None",
                    author: "Agatha Christie",
                    image: {andthentherewerenone},
                    cost: "$17"
                },
                {
                    name:"The Godfather",
                    author: "Mario Puzo",
                    image: {thegodfather},
                    cost: "$20"
                },
                {
                    name:"Gone Girl",
                    author: "Gillian Flynn",
                    image: {gonegirl},
                    cost: "$20"
                },
                {
                    name:"The Girl with the Dragon Tattoo",
                    author: "Stieg Larsson",
                    image: {dragontatoo},
                    cost: "$22"
                },
                {
                    name:"Angels and Demons",
                    author: "Dan Brown",
                    image: {angels},
                    cost: "$17"
                },
                {
                    name:"The Lovely Bones",
                    author: "Alice Sebold",
                    image: {lovelybones},
                    cost: "$15"
                },
            ]
        }
    ]
    return(
        <main>
        </main>
    )
}

export default Product;