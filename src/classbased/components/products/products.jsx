
import Product from "./product.jsx";
import {Component} from "react";
import ProductContext from "../../../context/products.jsx";
import './../../../components/products/products.css';



class Products extends Component{
    
    constructor() {
        super();

        // console.log('Products - mount')

    }

    static contextType = ProductContext;

    // componentDidMount() {
    //     console.log('Products - didMount')
    // }

    // componentDidUpdate() {
    //
    //     console.log('Products - didUpdate')
    // }

    render() {

        // console.log('Products - render')

        return (

            <div className='page__container'>
                <div onClick={() => this.context.reset()}
                     className='bg-amber-400 p-2 rounded max-w-20 text-center mb-2'>reset
                </div>
                <div className='products '>
                    {this.context.products.map(p => (

                        <Product
                            key={p.id}
                            id={p.id}
                            productNmae={p.productNmae}
                            count={p.count}

                        />


                    ))}
                </div>
            </div>

        )
    }

}


export default Products;