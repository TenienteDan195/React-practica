
import './navbar.css';
import Logo from '../logo/logo';
import Carwidget from '../carwidget/carwidget';

 const NavBar = () => {

    return(
        <>
            <nav>
                <Logo/>
                <ul>
                <li><a href='#'>producto</a></li>
                <li><a href='#'>estilo</a></li>
                <li><a href='#'>modelo</a></li>
                </ul>   
                <Carwidget/>
            </nav>  
        </>
    )

}

export default NavBar;