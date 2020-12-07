import React from "react";
import "./iconStyle.scss";
import useAppContext from '../UseContext/UseAppContext'
import { Link } from 'react-router-dom';

const Icons = ({ iconName, callback }) => {
  const { productsCount } = useAppContext()

  return (<div className="contenedor" >
    <Link to='/Cart'>
    <div>{productsCount()}</div>
    </Link>
  <i className={`fas fa-${iconName}`} onClick={callback} />
  </div>
  )};

export default Icons;
