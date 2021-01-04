import React from 'react'
import {Link} from 'react-router-dom';
import  ErrorImg from'../Error/error.png'
const Error = () => {
  return (
    <div>
      <img src={ErrorImg} alt="error img"/>
      <h1>Aqui no hay productos</h1>
      <p className="ml-4">
        Haga click
        <Link to="/" className="font-weight-bold">
          aqui
        </Link>
        para continuar haciendo compras
      </p>
    </div>
  );
}

export default Error;


