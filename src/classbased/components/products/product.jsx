import {Component} from "react";
import ProductContext from "../../../context/products.jsx";



class Product extends Component{
    

    constructor() {
        super();

        // console.log('Product - mount')
    }

    static contextType = ProductContext;


    // componentDidMount() {
    //     console.log('Product - didMount')
    // }

    // componentDidUpdate() {
    //
    //     console.log('Product - didUpdate')
    // }

    render() {

        // console.log('Product - render')

        return (
            <>

                <div className='product'>

                    <h2 className='font-bold'>{this.props.productNmae}</h2>

                    <div className='flex gap-2 mt-2'>
                        <span onClick={() => {
                            this.context.decrease(this.props.id)
                        }} className='py-1 px-4 rounded bg-rose-600'>-</span>
                        <span className='py-1 px-4 rounded bg-amber-400'>{this.props.count}</span>
                        <span onClick={() => {
                            this.context.increase(this.props.id)
                        }} className='py-1 px-4 rounded bg-green-500'>+</span>
                        <span onClick={() => {
                            this.context.deleteProduct(this.props.id)
                        }} className='py-1 px-4 rounded bg-rose-600'>delete</span>
                    </div>

                </div>

            </>
        )
    }


}

export default Product