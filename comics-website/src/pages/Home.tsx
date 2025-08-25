import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to the Comics Website</h1>
            <p>Explore a variety of comics and enjoy the stories told through panels.</p>
            <a href="/comics" className="button">View Comics</a>
        </div>
    );
};

export default Home;