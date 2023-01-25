import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./books.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Book = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [book, setBook] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getBook();
    }, []);

    const getBook = async () => {
        const querySnapshot = await getDocs(collection(db, 'book'));
        setBook(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderBook = (book) => {
        return (
            <div className="images-container">
                {
                    book.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.image}
                                className="book-image"
                                alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                
                                    <h4 className="description">{port.description}</h4>
                                   
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >Download</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Favorite Books".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderBook(book)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Book;