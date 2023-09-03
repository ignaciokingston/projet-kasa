import React from 'react';
import { Link } from 'react-router-dom';
import '../style/notfound.css';


function NotFound() {
    return (
    <div className='main__error'>
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to={`/`}>Retourner sur la page d'accueil</Link>
    </div>
    )
  }
  
  export default NotFound