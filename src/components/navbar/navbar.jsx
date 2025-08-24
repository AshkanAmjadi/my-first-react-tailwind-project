import './navbar.css'
import {useContext} from "react";
import ProductContext from "../../context/products.jsx";


const Navbar = () => {


    const props = useContext(ProductContext)

    return (
        <nav
            id='nav'
            className='page__container'>

            <ul className='flex gap-6 flex-wrap'>
                <li>
                    page
                </li>
                <li>
                    about
                </li>
                <li>
                    docs
                </li>
                <li>
                    info
                </li>
                <li>
                    count : {calcSum()}
                </li>
            </ul>

        </nav>
    )


    function calcSum() {

        let sum = 0

        props.products.forEach(p => {
            sum += p.count;
        })

        return sum

    }

}


export default Navbar