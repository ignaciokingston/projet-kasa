import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import logementsData from '../annonces.json';
import Banner1 from '../assets/Banner1.png';
import '../style/card.css';


const Home = () => {
  const [logements, setLogements] = useState ([]);

  useEffect (() => {
    setLogements(logementsData);
  }, []);

  return (
    <main>
    <img className='banner-home' src={Banner1} alt="Banner montagnes mer" />
    <div className='logements-container'>
      {logements.map (logement => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
      </div>
    </main>
  );
};


export default Home
