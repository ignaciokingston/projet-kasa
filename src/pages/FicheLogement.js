import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import logementsData from '../annonces.json';
import '../style/fichelogement.css';

function FicheLogement() {
  const {id} = useParams();

  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    return <div> Logement non trouvé</div>
  }

    return (
      <div>
       <Slideshow pictures={logement.pictures} />
      </div>
    );
  }
  
  export default FicheLogement;