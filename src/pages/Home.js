import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner'
import Banner1 from '../assets/Banner1.png';
import Card from '../components/Card';
import logementsData from '../annonces.json';
import '../style/card.css';


const Home = () => {
  const [logements, setLogements] = useState ([]);

  useEffect (() => {
    setLogements(logementsData);
  }, []);

  return (
    <main>
    <Banner imageUrl={Banner1} title="Chez vous, partout et ailleurs" />
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
