import "./iconStyle.scss";

import React from "react";

const Icons = ({ iconName, callback }) => {
  return (<div className="contenedor" >
  <i className={`fas fa-${iconName}`} onClick={callback} />
  </div>
  )};

export default Icons;
