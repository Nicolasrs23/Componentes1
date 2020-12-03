//VER DE MANDAR EL TEXTO POR PROPS PARA QUE SEA REUTILIZABLE EL COMPONENTE



import './Button.scss'
import {Link} from 'react-router-dom'

const Button = ({content, callback}) =>{

    return <Link to="/detail/:id"> Comprar </Link>;
}

export default Button;