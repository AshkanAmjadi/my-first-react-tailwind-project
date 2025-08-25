
import Product from "./product.jsx";
import './products.css';
import {Component} from "react";
import ProductContext from "../../../context/products.jsx";



class Products extends Component{
    


    static contextType = ProductContext;


    render() {
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