import './navbar.css'
import {NavLink} from "react-router";
const Navbar = () => {



    return (
        <nav
            id='nav'
            className='page__container'>

            <ul className='flex gap-6 flex-wrap'>
                <NavLink className='nav-list' to="/" end>
                    home
                </NavLink>
                <NavLink className='nav-list' to="/users" end>
                    users
                </NavLink>
                <NavLink className='nav-list' to="/products" end>
                    products
                </NavLink>
                <li>
                    login
                </li>
            </ul>

        </nav>
    )




}


export default Navbar