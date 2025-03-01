import React, { useState } from "react";
import './Products.css'
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

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

// fantasy
import harrypotter from './images/books/harrypotter.jpg'
import hobbit from './images/books/hobbit.jpg'
import thelion from './images/books/thelion.jpg'
import northernlights from './images/books/northernlights.jpg'
import dune from './images/books/dune.jpg'
import bookthief from './images/books/bookthief.jpg'

const Product = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const booksArray = [
        {
            category: "Classics",
            books:[
                {
                    name: "A Tale of Two Cities",
                    author: "Charles Dickens",
                    image: ataleoftwocities,
                    cost: "$15"
                },
                {
                    name:"Dream of the Red Chamber",
                    author: "Cao Xueqin",
                    image: dreamofredchamber,
                    cost: "$20"
                },
                {
                    name:"The Catcher in the Rye",
                    author: "JD Salinger",
                    image: thecatcherintherye,
                    cost: "$20"
                },
                {
                    name:"The Handmaid's Tale",
                    author: "Margaret Atwood",
                    image: thehandmaidstale,
                    cost: "$17"
                },
                {
                    name:"1984",
                    author: "George Orwell",
                    image: nineteen,
                    cost: "$20"
                },
                {
                    name:"Jane Eyre",
                    author: "Charlotte Brontë",
                    image: janeeyre,
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
                    image: andthentherewerenone,
                    cost: "$17"
                },
                {
                    name:"The Godfather",
                    author: "Mario Puzo",
                    image: thegodfather,
                    cost: "$20"
                },
                {
                    name:"Gone Girl",
                    author: "Gillian Flynn",
                    image: gonegirl,
                    cost: "$20"
                },
                {
                    name:"The Girl with the Dragon Tattoo",
                    author: "Stieg Larsson",
                    image: dragontatoo,
                    cost: "$22"
                },
                {
                    name:"Angels and Demons",
                    author: "Dan Brown",
                    image: angels,
                    cost: "$17"
                },
                {
                    name:"The Lovely Bones",
                    author: "Alice Sebold",
                    image: lovelybones,
                    cost: "$15"
                },
            ]
        },
        {
            category: "Fantasy",
            books: [
                {
                    name: "Harry Potter and the Philosopher's Stone",
                    author: "JK Rowling",
                    image: harrypotter,
                    cost: "$18"
                },
                {
                    name: "The Hobbit",
                    author: "JRR Tolkien",
                    image: hobbit,
                    cost: "$18"
                },
                {
                    name: "The Lion, the Witch and the Wardrobe",
                    author: "CS Lewis",
                    image: thelion,
                    cost: "$15"
                },
                {
                    name: "Northern Lights",
                    author: "Philip Pullman",
                    image: northernlights,
                    cost: "$12"
                },
                {
                    name: "Dune",
                    author: "Frank Herbert",
                    image: dune,
                    cost: "$30"
                },
                {
                    name: "The Book Thief",
                    author: "Markus Zusak",
                    image: bookthief,
                    cost: "$20"
                },
            ]
        }
    ]

    const handleAddtoCart = (book) =>{
        dispatch(addItem(book))
        setAddedToCart((prevState) => (
            {
                ...prevState,
                [book.name]: true,
            }
        ));
    }
    console.log(cart)

    return(
        <div className="product">
            {booksArray.map((section, sectionIndex) => (
                <div className="section" key={sectionIndex}>
                    <h2>{section.category}</h2>
                    <div className="books">
                        {section.books.map((book, bookIndex) => (
                            <div className="book" key={bookIndex}>
                                <img src={book.image} alt={book.name}/>
                                <h3>{book.name}</h3>
                                <p>{book.author}</p>
                                <p>{book.cost}</p>
                                {cart.items.find(item => item.name === book.name) ? (
                                    <button className="product-button-added-to-cart">Added to cart</button> ) :
                                    ( <button className="product-button"  onClick={() => handleAddtoCart(book)}>Add to cart</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product;