import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import Title from '../components/Title';
import Host from '../components/Host';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import logementsData from '../annonces.json';
import '../style/fichelogement.css';

function FicheLogement() {
  const {id} = useParams();

  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/*"/>
  }

    return (
      <div>
       <Slideshow pictures={logement.pictures} />
       <div className='fichelogement'>
          <div className='fichelogement__titlehost'>
            <Title title={logement.title} location={logement.location}/>
            <Host hostName={logement.host.name} hostPicture={logement.host.picture}/>
          </div>
          <div className='fichelogement__tagsrating'>
            <Tags tags={logement.tags} />
            <Rating rating={logement.rating} />
          </div>
          <div className='fichelogement__collapses'>
            <div className='fichelogement__collapses--left'>
              <Collapse title='Description' content= {logement.description} />
            </div>
            <div className='fichelogement__collapses--right'>
              <Collapse title='Equipements' 
                        content={logement.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default FicheLogement;