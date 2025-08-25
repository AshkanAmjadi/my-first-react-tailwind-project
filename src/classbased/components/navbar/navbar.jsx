import './../../../components/navbar/navbar.css'
import ProductContext from "../../../context/products.jsx";
import {Component} from "react";


class Navbar extends Component {


    constructor() {
        super();

        // console.log('Navbar - mount')
    }
    static contextType = ProductContext;

    // componentDidMount() {
    //     console.log('Navbar - didMount')
    // }

    // componentDidUpdate() {
    //
    //     console.log('Navbar - didUpdate')
    // }

    render() {
        // console.log('Navbar - render')

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
                        count : {this.calcSum()}
                    </li>
                </ul>

            </nav>
        )
    }


    calcSum() {

        let sum = 0

        this.context.products.forEach(p => {
            sum += p.count;
        })

        return sum

    }

}


export default Navbar