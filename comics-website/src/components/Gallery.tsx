import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery: React.FC = () => {
    const [comics, setComics] = useState<string[]>([]);

    useEffect(() => {
        const fetchComics = async () => {
            const response = await fetch('/comics');
            const comicFolders = await response.json();
            setComics(comicFolders);
        };

        fetchComics();
    }, []);

    return (
        <div className="gallery">
            {comics.map((comic, index) => (
                <Link key={index} to={`/comics/${comic}`}>
                    <div className="comic-thumbnail">
                        <img src={`/comics/${comic}/panel-1.jpg`} alt={`${comic} thumbnail`} />
                        <h3>{comic}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Gallery;